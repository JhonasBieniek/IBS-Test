import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent {

  name: string = "";
  profession: string = "";
  pet: string = "";
  email: string = "";
  phone: string = "";

  constructor(private helperService: HelperService) { }

  registerUser() {
    const data = {
      name: this.name,
      profession: this.profession,
      pet: this.pet,
      phone: this.phone,
      email: this.email,
      id: uuidv4(),
    }
    this.helperService.createUser(data).then(() => {
      this.clearToSendAgain();
    })
  }

  clearToSendAgain() {
    this.name = "";
    this.profession = "";
    this.pet = "";
    this.phone = "",
    this.email = ""
  }
}
