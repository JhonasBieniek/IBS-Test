import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent {

  user!: User;
  userId: string = '';
  form!: FormGroup;

  constructor(
    private helperService: HelperService, 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      name: [null],
      id: [null],
      profession: [null],
      pet: [null],
      email: [null],
      phone: [null],
    });
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      this.user = await this.helperService.getOneUser(this.userId);
      if(this.user.id == undefined){
        this.router.navigate(['/'])
      }
      this.form.patchValue(this.user)
    } catch (error) {
      console.log(error);
    }
  }

  editValues() {
    this.helperService.editUser(this.userId, this.form.value)
  }
}
