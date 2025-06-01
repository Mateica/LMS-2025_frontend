import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormArrayName, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FormMetadata, InputMetadata } from '../../../model/metadata';
import { MatFormField, MatInput, MatInputModule, MatLabel } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormatOptions } from '@syncfusion/ej2-base/src/intl/date-formatter';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-generic-form',
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatButtonModule, MatLabel, QuillModule],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent implements OnInit, OnChanges {
  @Input()
  metadata: FormMetadata = { displayedInputs: [], inputs: [] };

  @Output()
  submit = new EventEmitter<any>();

  form = new FormGroup({});

  ngOnInit(): void {
    this.updateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['metadata'] && changes['metadata'].currentValue !== changes['metadata'].previousValue) {
      this.updateForm();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

  addElement(array: AbstractControl | null, children?: InputMetadata[]) {
    const formArray = array as FormArray<FormGroup>;
    formArray.push(this.buildGroupFromChildren(children || []));
  }

  removeElement(array: AbstractControl | null, index: number) {
    const formArray = array as FormArray<FormGroup>;
    formArray.removeAt(index);
  }

  getFormControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
  }

  getFormArray(control: AbstractControl | null): FormArray<FormGroup> {
    return control as FormArray<FormGroup>;
  }

  private updateForm() {
    const newForm = new FormGroup({});

    for (const input of this.metadata.inputs) {
      if (input.maxCount && input.maxCount > 1) {
        const array: FormArray<FormGroup> = new FormArray<FormGroup>([]);
        array.push(this.buildGroupFromChildren(input.children || []));
        newForm.addControl(input.key, array);
      } else {
        const control = new FormControl(input.defaultValue, input.validators);
        newForm.addControl(input.key, control);
      }
    }

    this.form = newForm;
  }

  private buildGroupFromChildren(children: InputMetadata[]): FormGroup {
    const group: any = {};
    for (const child of children) {
      group[child.key] = new FormControl(child.defaultValue, child.validators);
    }
    return new FormGroup(group);
  }
}
