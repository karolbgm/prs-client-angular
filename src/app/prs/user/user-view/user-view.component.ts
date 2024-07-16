import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

  isReadonly = true;
  isHidden = true;
  user: User = new User(); //property type user. We have to assign it to new User. //creating an empty instance
  verifyRemove: boolean = false;

 constructor(
  private usrsvc: UserService,
  private route: ActivatedRoute, //allows us to read the id that will be passed in the url
  private router: Router //lets us programatically navigate to different components (redirect)
 ) {}

 toggleVerifyRemove(): void {
  this.verifyRemove = !this.verifyRemove;
 }

 remove(): void {
 this.usrsvc.remove(this.user.id).subscribe({
    next: (res) => {
      console.log("User deleted successfully");
      this.router.navigateByUrl("/user/list"); //redirect
      },
    error: (err) => {
      console.error(err);
    }  
  })
 }

 ngOnInit(): void {
  let id = this.route.snapshot.params["id"]; //getting the id value from the url and assigning to id
  console.log("Id is ", id);
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



