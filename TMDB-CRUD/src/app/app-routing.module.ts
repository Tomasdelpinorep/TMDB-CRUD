import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedPageComponent } from './ui/approved-page/approved-page.component';
import { ListDetailsPageComponent } from './ui/list-details-page/list-details-page.component';
import { ListsPageComponent } from './ui/lists-page/lists-page.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { MovieDetailsPageComponent } from './ui/movie-details-page/movie-details-page.component';
import { TvSeriesPageComponent } from './ui/tv-series-page/tv-series-page.component';
import { SerieDetailsPageComponent } from './ui/serie-details-page/serie-details-page.component';
import { AccountPageComponent } from './ui/account-page/account-page.component';
import { ActorsPageComponent } from './ui/actors-page/actors-page.component';
import { MoviesPageComponent } from './ui/movies-page/movies-page.component';
import { ActorDetailsPageComponent } from './ui/actor-details-page/actor-details-page.component';
import { CompanyDetailsPageComponent } from './ui/company-details-page/company-details-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

const routes: Routes =  [
  { path: 'home', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'movie/:id', component: MovieDetailsPageComponent },
  { path: 'tv/:id', component: SerieDetailsPageComponent },
  { path: 'tv', component: TvSeriesPageComponent },
  { path: 'approved', component: ApprovedPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'actors', component: ActorsPageComponent },
  { path: 'series', component: TvSeriesPageComponent },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'actor/:id', component: ActorDetailsPageComponent },
  { path: 'actors/:id', component: ActorDetailsPageComponent },
  { path: 'company/:id', component: CompanyDetailsPageComponent },
  { path: '**', component: PageNotFoundComponent },  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
