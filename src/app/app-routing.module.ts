import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailTemplateComponent } from './components/email/mail-template/mail-template.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { UsersCreateComponent } from './components/user/users-create/users-create.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UsersEditComponent } from './components/user/users-edit/users-edit.component';
import { UsersDeleteComponent } from './components/user/users-delete/users-delete.component';


const routes: Routes = [
  { path: 'sendMail', component: MailTemplateComponent },
  { path: '', component: UsersListComponent },
  { path: 'create', component: UsersCreateComponent},
  { path: 'more/:id', component: UserDetailsComponent},
  { path: 'edit/:id', component: UsersEditComponent},
  { path: 'delete/:id', component: UsersDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }