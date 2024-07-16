import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { MenuComponent } from './prs/menu/menu/menu.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    UserViewComponent,
    UserChangeComponent,
    UserCreateComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
