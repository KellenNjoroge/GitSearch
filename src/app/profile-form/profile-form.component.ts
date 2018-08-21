import { Component, OnInit } from '@angular/core';
import {ProfilesService} from '../profile-service/profiles.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  profile: any [];
  repos: any [];
  username: string;
  constructor(private profilesService: ProfilesService, private http: Http) {
    this.profilesService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
      });
      this.profilesService.getProfileRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
        });
   }

  ngOnInit() {
  }
  findProfile() {
    this.profilesService.updateProfile(this.username);
    this.profilesService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
      });
      this.profilesService.getProfileRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
        });
  }
}
