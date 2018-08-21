import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
 private username: string;
 private clientid = '4f40877bb6e88a67e138';
 private clientsecret = '7d7b35ccb612fb1cd32c1063cc6ae1feb32c65e6';
  constructor(private http: Http) {
    console.log ('service is now ready');
    this.username = 'KellenNjoroge';
   }
   getProfileInfo() {
    return this.http.get('https://api.github.com/users/'
    + this.username + '?client_id' + this.clientid + '&client_secret=' + this.clientsecret )
    .pipe(
    map(res => res.json())
  );
  }
}
// https://api.github.com/users/KellenNjoroge?access_token=ed1ef4560933cae249b21bf58136daf47b546069
