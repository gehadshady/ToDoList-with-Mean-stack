import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServ:UserService, private router:Router) { }

  ngOnInit() {}

  newUser:User = new User();

  gotoLogin(){
    this.router.navigate(['/login'])
  }
  
  addUser(user){
    this.userServ.register(user).subscribe(
      result=>console.log(result),
      error=>console.log(error),
      ()=>{alert("register successfully");this.gotoLogin()}
    )
  }
}
