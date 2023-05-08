import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/shared/services/helper.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss']
})
export class UserTemplateComponent {
  @Input() userId: string = '';
  @Input() templateContext: string = '';

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private helperService: HelperService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null],
      id: [null],
      profession: [null],
      pet: [null],
      email: [null],
      phone: [null],
    });
  }

  defineToSend() {
    if (this.templateContext == 'create') {
      this.form.get(['id'])?.setValue(uuidv4())
      this.helperService.createUser(this.form.value).then(() => {
      this.form.reset()
      })
    } else {
      this.helperService.editUser(this.userId, this.form.value)
    }
  }
}
