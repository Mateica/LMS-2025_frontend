import { Component, Input } from '@angular/core';
import { Message } from '../../model/message';
import { MessageService } from '../../service/message/message.service';
import { RegisteredUser } from '../../model/registered-user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = [];

  @Input()
  messageContent: string = '';
  selectedFiles: File[] = [];
  editingMessage: Message | null = null;

  currentMessage : Message | null = null;

  sender! : RegisteredUser;    
  receiver! : RegisteredUser;  

  constructor(private service: MessageService) {}

  ngOnInit() {
    this.service.getAll().subscribe(r =>{
      this.messages = r;
    })
  }

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  sendMessage() {
    if(this.currentMessage){
      this.currentMessage.receiver.id = this.receiver.id;
      this.currentMessage.sender.id = this.sender.id;
    for (let file of this.selectedFiles) {
      this.currentMessage.attachments?.push(file);
    }

    if (this.editingMessage) {
      this.service.update(this.editingMessage.id, this.currentMessage).subscribe(msg => {
        const index = this.messages.findIndex(m => m.id === msg.id);
        this.messages[index] = msg;
        this.resetForm();
      });
    } else {
      this.service.create(this.currentMessage).subscribe(msg => {
        this.messages.push(msg);
        this.resetForm();
      });
    }
    }
  }

  editMessage(msg: Message) {
    this.editingMessage = msg;
    this.messageContent = msg.content;
    this.selectedFiles = [];
  }

  deleteMessage(id: number) {
    this.service.delete(id).subscribe(() => {
      this.messages = this.messages.filter(m => m.id !== id);
    });
  }

  resetForm() {
    this.editingMessage = null;
    this.messageContent = '';
    this.selectedFiles = [];
  }

 renderMarkdown(text: string): string {
  //   return marked(text || '');
  return "";
 }
}

