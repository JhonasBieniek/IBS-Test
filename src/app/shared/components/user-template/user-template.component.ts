import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/shared/services/helper.service';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss']
})
export class UserTemplateComponent {
  @Input() userId: string = '';
  @Input() templateContext: string = '';

  form!: FormGroup;
  showError: boolean = false;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private helperService: HelperService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      id: [null],
      profession: [null],
      pet: [null],
      email: [null],
      phone: [null],
    });
    if (this.templateContext !== 'create') {
      this.route.params.subscribe(params => {
        this.userId = params['id'];
      });
      try {
        this.user = await this.helperService.getOneUser(this.userId);
        if (this.user.id == undefined) {
          this.router.navigate(['/'])
        }
        this.form.patchValue(this.user)
      } catch (error) {
        console.log(error);
      }
    }
  }

  defineToSend() {
    if (!this.form.invalid) {
      if (this.templateContext == 'create') {
        this.form.get(['id'])?.setValue(uuidv4())
        this.helperService.createUser(this.form.value).then(() => {
          this.form.reset();
          this.showError = false;
        })
      } else {
        this.helperService.editUser(this.userId, this.form.value)
        this.showError = false;
      }
    } else {
      this.showError = true;
    }
  }
}
