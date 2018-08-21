import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ProfilesService} from './profile-service/profiles.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
// Defining routes
const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileFormComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
