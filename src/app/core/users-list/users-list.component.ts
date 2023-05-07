import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: any = [];

  constructor(private helperService: HelperService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.usersList = await this.helperService.getAllData();
    } catch (error) {
      console.log(error);
    }
  }
}
