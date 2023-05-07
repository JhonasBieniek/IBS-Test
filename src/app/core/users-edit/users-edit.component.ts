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
  profission: string = "";
  pet: string = "";

  constructor(private helperService: HelperService, private route: ActivatedRoute) { }


  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      this.oneUser = await this.helperService.getOneData(this.userId);
      this.name = this.oneUser[0][1].name
      this.profission = this.oneUser[0][1].profission
      this.pet = this.oneUser[0][1].pet
    } catch (error) {
      console.log(error);
    }
  }

  editValues() {
    let data = {
      "name": this.name,
      "profission": this.profission,
      "pet": this.pet
    }
    this.helperService.editUser(this.userId, data)
  }
}
