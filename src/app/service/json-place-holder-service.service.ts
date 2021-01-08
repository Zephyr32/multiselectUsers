import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address, Company, Geolocation, User} from '../model/user';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderServiceService {

  constructor(public http: HttpClient) {
  }

  getUserList(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((value: Array<User>) => {
        return value.map(
          (user: User) => {
            return new User({
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              address: new Address({
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode,
                geo: new Geolocation(
                  user.address.geo
                )
              }),
              phone: user.phone,
              website: user.website,
              company: new Company(user.company),
            });
          }
        );
      }),
    );
  }
}
