import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/helper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent {

  oneUser: any = [];
  userId: string = '';

  name: string = "";
  profession: string = "";
  pet: string = "";
  email: string = "";
  phone: string = "";

  constructor(private helperService: HelperService, private route: ActivatedRoute) { }


  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      this.oneUser = await this.helperService.getOneData(this.userId);
      this.name = this.oneUser[0][1].name
      this.profession = this.oneUser[0][1].profession
      this.pet = this.oneUser[0][1].pet
      this.phone = this.oneUser[0][1].phone
      this.email = this.oneUser[0][1].email
    } catch (error) {
      console.log(error);
    }
  }

  editValues() {
    let data = {
      "name": this.name,
      "profession": this.profession,
      "pet": this.pet,
      "phone": this.phone,
      "email": this.email
    }
    this.helperService.editUser(this.userId, data)
  }
}
