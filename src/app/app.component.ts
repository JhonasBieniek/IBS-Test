import { HelperService } from './shared/services/helper.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  loading: boolean = false;
  hasSended: boolean = false;
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(){
    this.helperService.isLoading().subscribe(value => {
      this.loading = value;
    });
    this.helperService.isSending().subscribe(value => {
      this.hasSended = value;
    });
  }

  changeTemplate(){
    this.helperService.setSend(false);
  }
}