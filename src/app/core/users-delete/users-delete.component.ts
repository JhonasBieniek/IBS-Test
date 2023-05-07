import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/helper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.scss']
})
export class UsersDeleteComponent {

  userId: string = '';

  constructor(private helperService: HelperService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      await this.helperService.deleteUser(this.userId);
    } catch (error) {
      console.log(error);
    }
  }
}
