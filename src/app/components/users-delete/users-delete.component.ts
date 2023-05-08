import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';



@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.scss']
})
export class UsersDeleteComponent {

  userId: string = '';
  user!: User;

  constructor(private helperService: HelperService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      this.user = await this.helperService.getOneUser(this.userId);
      if(this.user.id == undefined){
        this.router.navigate(['/'])
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(): Promise<void> {
    try {
      await this.helperService.deleteUser(this.userId).then(() => {
        this.router.navigate(['/']);
      })
    } catch (error) {
      console.log(error);
    }
  }
}
