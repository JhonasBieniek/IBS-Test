import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss']
})
export class UserTemplateComponent {
@Input() userId: string | null = '';
@Input() templateContext: string = '';

form!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){

  }

  ngOnInit(){
    this.form = this.fb.group({
      name: [null],
      id: [null],
      profession: [null],
      pet: [null],
      email: [null],
      phone: [null],
    });
  }

  defineToSend(){

  }
}
