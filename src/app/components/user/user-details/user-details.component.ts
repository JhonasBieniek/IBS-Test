import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user!: User;
  userId: string = '';

  constructor(
    private helperService: HelperService, 
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      this.user = await this.helperService.getOneUser(this.userId);
    } catch (error) {
      console.log(error);
    }
  }
}
