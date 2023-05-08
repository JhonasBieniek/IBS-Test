import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent {

  user!: User;
  userId: string = '';

  constructor(
    private helperService: HelperService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      this.user = await this.helperService.getOneUser(this.userId);
      if (this.user.id == undefined) {
        this.router.navigate(['/'])
      }
    } catch (error) {
      console.log(error);
    }
  }
}
