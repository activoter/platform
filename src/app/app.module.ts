import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContentsComponent } from './contents/contents.component';
import { LogoComponent } from './logo/logo.component';
import { VoteComponent } from './vote/vote.component';
import { HomeComponent } from './home/home.component';
import { ConstitutionComponent } from './constitution/constitution.component';
import { LearnComponent } from './learn/learn.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { SwipeBoxComponent } from './swipe-box/swipe-box.component';
import { VoterRegistrationComponent } from './voter-registration/voter-registration.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'learn/constitution', component: ConstitutionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent,
    UserProfileComponent,
    ContentsComponent,
    LogoComponent,
    VoteComponent,
    HomeComponent,
    ConstitutionComponent,
    LearnComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ContactComponent,
    SwipeBoxComponent,
    VoterRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
