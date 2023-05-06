import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { ErrorMessageComponent } from './pages/error-message/error-message.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersListComponent } from './core/users-list/users-list.component';
import { MailTemplateComponent } from './core/mail-template/mail-template.component';
import { UsersCreateComponent } from './core/users-create/users-create.component';
import { UsersEditComponent } from './core/users-edit/users-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent,
    ErrorMessageComponent,
    LoadingComponent,
    HeaderComponent,
    UsersListComponent,
    MailTemplateComponent,
    UsersCreateComponent,
    UsersEditComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
