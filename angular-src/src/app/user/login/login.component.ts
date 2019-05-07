import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServ:UserService , private router:Router) { }

  ngOnInit() {}

  currentUser:User=new User();

  gotoProfile(id){
    this.router.navigate(['/profile',id])
  }

  gotoRigster(){
    this.router.navigate(['/register'])
  }

  Login(formData){
    this.userServ.login(formData).subscribe(
      result=>this.currentUser=result,
      error=>alert("invalid name or pass"),
      ()=>{
        alert("login successfully");
        this.gotoProfile(this.currentUser._id);
        this.userServ.currentUser=this.currentUser
        }
    )}


}
