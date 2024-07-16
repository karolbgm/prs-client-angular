import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorViewComponent } from './prs/vendor/vendor-view/vendor-view.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './prs/vendor/vendor-change/vendor-change.component';

//place your routes here
const routes: Routes = [
  //MAIN PAGE
  {path: "", redirectTo: "/user/list", pathMatch: "full"},

  //routes for user
  {path: "user/list", component: UserListComponent}, //remember to not write the leading '/'
  {path: "user/view/:id", component: UserViewComponent},
  {path: "user/create", component:UserCreateComponent},
  {path: "user/login", component:UserLoginComponent},
  {path: "user/change/:id", component:UserChangeComponent},

  //routes for vendor
  {path: "vendor/list", component: VendorListComponent}, //remember to not write the leading '/'
  {path: "vendor/view/:id", component: VendorViewComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "vendor/change/:id", component: VendorChangeComponent},


  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  // {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
