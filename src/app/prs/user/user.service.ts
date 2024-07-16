import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //this is like the Task in C#, it handles the async nature of what's going on
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 baseurl: string = "http://localhost:5000/api/users";

  constructor(
    private http: HttpClient //this is a dependency injection, we inject into our code, the dependencies we need
  ) { }


  //we're making the get call to the baseurl and the component is gonna call the service and the service is gonna call the server.
  //It till return the Observable. 
  //COMPONENT ---> SERVICE ---> CONTROLLER
  //CONTROLLER ---> SENDS OBSERVABLE[USER[]] ---> COMPONENT
  //The Observable<User[]> is like Task<IEnumerable> in C#
  
  login(username: string, password: string): Observable<User> {
    return this.http.get(`${this.baseurl}/${username}/${password}`) as Observable<User>;
  }
  
  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
    
  }

  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }

  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }

  change(user: User): Observable<any> {
    return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}

