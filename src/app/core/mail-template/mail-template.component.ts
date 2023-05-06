import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/helper.service';

@Component({
  selector: 'app-mail-template',
  templateUrl: './mail-template.component.html',
  styleUrls: ['./mail-template.component.scss']
})
export class MailTemplateComponent {
  loading: boolean = false;
  hasSended: boolean = false;
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.helperService.isLoading().subscribe(value => {
      this.loading = value;
    });
    this.helperService.isSending().subscribe(value => {
      this.hasSended = value;
    });
  }

  changeTemplate() {
    //apenas troca o template pois 
    //todos os dados de envio ja foram deletados
    this.helperService.setSend(false);
  }
}