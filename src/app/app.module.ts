import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MailTemplateComponent } from './components/mail-template/mail-template.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersDeleteComponent } from './components/users-delete/users-delete.component';
import { AppRoutingModule } from './app-routing.module';
import { UserTemplateComponent } from './shared/components/user-template/user-template.component';

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
