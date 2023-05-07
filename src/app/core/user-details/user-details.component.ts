import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/helper.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  oneUser: any = [];
  userId: string = '';

  constructor(private helperService: HelperService, private route: ActivatedRoute) { }


  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    try {
      this.oneUser = await this.helperService.getOneData(this.userId);
    } catch (error) {
      console.log(error);
    }
  }
}
