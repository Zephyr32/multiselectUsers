
export class User{
  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: Address;
  public phone: string;
  public website: string;
  public company: Company;

}

export class Company{
  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
  public name: string;
  public catchPhrase: string;
  public bs: string;
}
export class Address {
  constructor(init?: Partial<Address>) {
    Object.assign(this, init);
  }
  public street: string;
  public suite: string;
  public city: string;
  public zipcode: string;
  public geo: Geolocation;
}
export class Geolocation {
  constructor(init?: Partial<Geolocation>) {
    Object.assign(this, init);
  }
  public lat: string;
  public lng: string;
}
