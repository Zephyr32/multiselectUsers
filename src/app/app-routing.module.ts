import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUserComponent} from './list-user/list-user.component';
import {UserComponent} from './user/user.component';
import {UserFormComponent} from './user-form/user-form.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: UserComponent
  },
  {
    path: 'users', component: ListUserComponent
  },
  {
    path: 'formUsers', component: UserFormComponent
  },
  {
    path: '*', redirectTo: 'home', pathMatch: 'prefix'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
