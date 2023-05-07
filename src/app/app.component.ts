import { HelperService } from './shared/helper.service';
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
    this.helperService.getAllData();
  }

  changeTemplate(){
    //apenas troca o template pois 
    //todos os dados de envio ja foram deletados
    this.helperService.setSend(false);
  }
}