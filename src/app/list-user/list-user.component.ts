import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
   users: User[];
   groupUsers: [];
  constructor() { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('allUsers')) as User[];
  }

}
