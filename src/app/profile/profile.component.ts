import { Component, OnInit } from '@angular/core';
import {ProfilesService} from '../profile-service/profiles.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ProfilesService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profilesService: ProfilesService, private http: Http) {
    this.profilesService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    });
  }

  ngOnInit() {
  }

}
