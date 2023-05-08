import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserTemplateComponent } from './shared/components/user-template/user-template.component';
import { SendEmailComponent } from './components/email/send-email/send-email.component';
import { ErrorMessageComponent } from './components/email/error-message/error-message.component';
import { LoadingComponent } from './components/email/loading/loading.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { MailTemplateComponent } from './components/email/mail-template/mail-template.component';
import { UsersCreateComponent } from './components/user/users-create/users-create.component';
import { UsersEditComponent } from './components/user/users-edit/users-edit.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UsersDeleteComponent } from './components/user/users-delete/users-delete.component';

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
    UsersEditComponent,
    UserDetailsComponent,
    UsersDeleteComponent,
    UserTemplateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
