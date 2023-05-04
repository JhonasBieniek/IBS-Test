import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { ErrorMessageComponent } from './pages/error-message/error-message.component';
import { LoadingComponent } from './pages/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent,
    ErrorMessageComponent,
    LoadingComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
