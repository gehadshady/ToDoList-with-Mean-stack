import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  currentUser={}

  apiUrl:String = "api/user";

  register(user):Observable<any>{ 
    return this.http.post(this.apiUrl+"/register",user);
  }

  login(user):Observable<any>{
    return this.http.post(this.apiUrl+"/login",user);
  }

  addNewItem(item,userId){
    return this.http.post(this.apiUrl+`/addItem/${item}/${userId}`,item);
  }
}
