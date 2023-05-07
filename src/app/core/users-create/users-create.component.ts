import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/helper.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent {

  name: string = "";
  profission: string = "";
  pet: string = "";

  constructor(private helperService: HelperService) { }

  registerUser() {
    const data = {
      name: this.name,
      profission: this.profission,
      pet: this.pet,
      id: uuidv4(),
    }
    this.helperService.createUser(data).then(() => {
      this.clearToSendAgain();
    })
  }

  clearToSendAgain() {
    this.name = "";
    this.profission = "";
    this.pet = "";
  }
}
