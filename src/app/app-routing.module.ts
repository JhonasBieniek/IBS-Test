import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './core/users-list/users-list.component';
import { MailTemplateComponent } from './core/mail-template/mail-template.component';
import { UsersCreateComponent } from './core/users-create/users-create.component';
import { UserDetailsComponent } from './core/user-details/user-details.component';
import { UsersEditComponent } from './core/users-edit/users-edit.component';
import { UsersDeleteComponent } from './core/users-delete/users-delete.component';

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