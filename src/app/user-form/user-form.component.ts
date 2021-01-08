import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {User} from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public removable = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl();
  filteredUsers: Observable<User[]>; //
  users: User[] = new Array<User>(); //
  allUsers: User[];

  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: string | null) => {
          if (user) {
            debugger
            return this._filter(user);
          }
        else {
        return  this.allUsers;
          }
        }
      ));
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.userCtrl.setValue(null);
    }
  }

  remove(user: User): void {
     this.users.filter((users) => {
      return users.id === user.id;
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    if (this.users.includes(event.option.value)) {
      return ;
    }
    this.users.push(event.option.value);
    this.userCtrl.setValue('');
    console.log(this.users);
  }

  private _filter(value: string | User): User[] {
    console.log(value);
    if (value.id) {
      return ;
    }
    const filterValue = value.toLocaleLowerCase();

    return this.allUsers.filter((user: User) => user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }
  ngOnInit(): void {

this.allUsers = JSON.parse(localStorage.getItem('allUsers'));
  }

}
