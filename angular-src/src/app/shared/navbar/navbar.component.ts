import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  @Input() currentuser:User;

}
