import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApprovedPageComponent } from './ui/approved-page/approved-page.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListDetailsPageComponent } from './ui/list-details-page/list-details-page.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ApprovedPageComponent,
    UserListsComponent,
    ListItemComponent,
    ListDetailsPageComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
