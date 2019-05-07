import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userServ:UserService) { }

  currentuser:User={};

  ngOnInit() {
    this.currentuser=this.userServ.currentUser;
  }

  addItem(item){
    this.currentuser.list.push(item);
    this.userServ.addNewItem(item,this.currentuser._id).subscribe(
      result=>{console.log(result)},
      error=>console.log(error.message),
      ()=>{}
    )}

}
