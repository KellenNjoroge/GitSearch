import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ProfilesService} from './profile-service/profiles.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
// Defining routes
const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileFormComponent,
    SearchComponent,
    NotFoundComponent
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
