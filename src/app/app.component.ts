import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface responseMessage {
  text: string,
  buttonValue: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  emailToSendValue: string = "";
  titleValue: string = "";
  messageValue: string = "";
  loading: boolean = false;
  hasSended: boolean = false;
  requestMessage!: responseMessage;

  constructor(
    private http: HttpClient,
  ) { }

  sendEmail(): void {
    this.loading = true;
    const url = 'http://localhost:3000/send-email';
    const data = {
      email: this.emailToSendValue,
      title: this.titleValue,
      text: this.messageValue,
    };

    this.http.post(url, data).subscribe(() => {
      this.requestMessage = {
        text: 'Seu E-mail foi enviado com sucesso!',
        buttonValue: 'Novo E-mail',
      };
      this.hasSended = true;
      this.loading = false;
    }, (error) => {
      this.requestMessage = {
        text: 'Erro ao enviar o E-mail:',
        buttonValue: 'Tentar Novamente',
      };
      this.hasSended = true;
      this.loading = false;
    });
  }
}