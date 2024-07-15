import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prs/user/user-list/user-list.component';

//place your routes here
const routes: Routes = [
  {path: "", redirectTo: "/user/list", pathMatch: "full"},
  {path: "user/list", component: UserListComponent} //remember to not write the leading '/'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
