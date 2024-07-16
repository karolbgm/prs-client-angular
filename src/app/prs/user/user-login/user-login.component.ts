import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from '../../../system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) {}

  login(): void {
    this.message = "";
    this.usrsvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log("Login successful!");
        this.sys.loggedInUser = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if(err.status == 404) {
          this.sys.loggedInUser = null;
          this.message = "Not found";
          return;
        }
        console.log(err);
      }
    })
  }

  ngOnInit(): void {

  }

}
