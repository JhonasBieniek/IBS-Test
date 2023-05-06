import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './core/users-list/users-list.component';
import { MailTemplateComponent } from './core/mail-template/mail-template.component';
import { UsersCreateComponent } from './core/users-create/users-create.component';

const routes: Routes = [
  { path: 'sendMail', component: MailTemplateComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'create', component: UsersCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }