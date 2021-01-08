import {Component, OnInit} from '@angular/core';
import {JsonPlaceHolderServiceService} from './service/json-place-holder-service.service';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JsonPlaceHolderServiceService],
})
export class AppComponent implements OnInit {
  title = 'userResume';
  allUsers: User[];
  someUser: User;

  constructor(private jsonPlaceholderService: JsonPlaceHolderServiceService) {
  }

  ngOnInit(): void {
    this.jsonPlaceholderService.getUserList().subscribe(value => {
      this.allUsers = value;
      this.someUser = this.allUsers[0];
      localStorage.setItem('allUsers', JSON.stringify(this.allUsers));
      localStorage.setItem('someUser', JSON.stringify(this.someUser));
    });
  }

}
