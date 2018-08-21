import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpModule} from '@angular/http';
import {ProfilesService} from './profile-service/profiles.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
