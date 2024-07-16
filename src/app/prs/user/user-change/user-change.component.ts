import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrl: './user-change.component.css'
})
export class UserChangeComponent {
  isReadonly = false;
  isHidden = false;
  user: User = new User(); //creating an empty instance

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.change(this.user).subscribe({
      next: (res) => {
        console.log("User changed successfully!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  // cancel(): void {
  //   this.router.navigateByUrl("/user/list");
  // }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]; //getting the id value from the url and assigning to id
  this.usrsvc.get(id).subscribe({
    next: (res) => {
      console.log(res);
      this.user = res as User;
    },
    error: (err) => {
      console.error(err);
    }
  })
}
}
