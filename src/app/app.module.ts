import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SwiperModule} from 'swiper/angular';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ListToursComponent} from './list-tours/list-tours.component';
import {GalleryToursComponent} from './gallery-tours/gallery-tours.component';
import {PartnersComponent} from './partners/partners.component';
import {AdvantagesComponent} from './advantages/advantages.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {GuideComponent} from './guide/guide.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FooterComponent} from './footer/footer.component';
import {AuthComponent} from './auth/auth.component';
import {RegComponent} from './reg/reg.component';

import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {AllToursComponent} from './all-tours/all-tours.component';
import { DetailedTourComponent } from './detailed-tour/detailed-tour.component';

import {UserStorage} from "./core/storage/user.storage";
import {TourStorage} from "./core/storage/tour.storage";
import {UserService} from "./core/service/user.service";
import {TourService} from "./core/service/tour.service";

const appRoutes: Routes =[
  { path: '', component: WelcomeComponent},
  { path: 'Auth', component: AuthComponent },
  { path: 'Reg', component: RegComponent },
  { path: 'All-Tours', component: AllToursComponent },
  { path: 'Detailed-Tour', component: DetailedTourComponent },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListToursComponent,
    GalleryToursComponent,
    PartnersComponent,
    AdvantagesComponent,
    ReviewsComponent,
    GuideComponent,
    ContactsComponent,
    FooterComponent,
    AuthComponent,
    WelcomeComponent,
    MainHeaderComponent,
    RegComponent,
    AllToursComponent,
    DetailedTourComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    [SwiperModule],
  ],
  providers: [
    UserStorage,
    TourStorage,
    UserService,
    TourService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export class YourAppModule {
}
