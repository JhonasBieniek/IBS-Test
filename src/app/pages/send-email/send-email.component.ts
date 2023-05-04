import { error } from 'console';
import { HelperService } from '../../shared/helper.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  @Output() hasError = new EventEmitter<boolean>();

  emailToSendValue: string = "";
  titleValue: string = "";
  messageValue: string = "";

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

  sendData() {
    this.helperService.setLoading(true);
    const data = {
      email: this.emailToSendValue,
      title: this.titleValue,
      text: this.messageValue,
    };
    if(this.verifyInputs()){
      this.helperService.sendEmail(data).then((value) => {
        this.helperService.setLoading(false);
        this.clearToSendAgain();
      }, (error) => {
        this.showProblem();
      })
    } else {
      this.showProblem();
    }
  }

  showProblem(){
    this.helperService.setLoading(false);
    this.helperService.setSend(true)
    this.clearToSendAgain();
  }

  verifyInputs(){
    if(this.emailToSendValue.includes("@") && this.titleValue.length > 0 && this.messageValue.length > 0){
      return true;
    } else {
      return false;
    }
  }

  clearToSendAgain() {
    //limpando variaveis principais
    this.emailToSendValue = "";
    this.titleValue = "";
    this.messageValue = "";
  }

}
