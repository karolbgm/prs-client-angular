import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';

//place your routes here
const routes: Routes = [
  {path: "", redirectTo: "/user/list", pathMatch: "full"},
  {path: "user/list", component: UserListComponent}, //remember to not write the leading '/'
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
