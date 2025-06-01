import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RouterOutlet } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  QuillModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning Management System';
}
