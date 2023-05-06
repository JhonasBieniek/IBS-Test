import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/helper.service';

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
    }
    this.helperService.createUser(data).then(() => {
      this.clearToSendAgain();
    })
  }

  clearToSendAgain() {
    //limpando variaveis principais
    this.name = "";
    this.profission = "";
    this.pet = "";
  }
}
