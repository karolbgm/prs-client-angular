import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
   users: User[] = [];

   constructor(
    private usrsvc: UserService //injecting service
   ){}

   ngOnInit(): void { //everytime the user displays this component, before it displays to user, angular will execute this first
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.table(res); //we can see it in the dev tools
        this.users = res as User[]; //this will pass the data to our users property
      },
      error: (err) => {
        console.error(err);
      }
    })
   }
}
//we're gonna make a call to to the service, then we're gonna use .subscribe() -- like await! when the data is ready give it to me
//next puts the data that comes back in the response(res) variable