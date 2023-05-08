import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MailTemplateComponent } from './components/mail-template/mail-template.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersDeleteComponent } from './components/users-delete/users-delete.component';

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