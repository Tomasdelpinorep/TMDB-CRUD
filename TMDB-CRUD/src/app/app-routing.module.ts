import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedPageComponent } from './ui/approved-page/approved-page.component';
import { ListDetailsPageComponent } from './ui/list-details-page/list-details-page.component';
import { ListsPageComponent } from './ui/lists-page/lists-page.component';
import { HomePageComponent } from './ui/home-page/home-page.component';

const routes: Routes = [
  {path:'home', component: HomePageComponent},
  {path:'', pathMatch:'full' ,redirectTo:'/home'},
  {path:'approved',component: ApprovedPageComponent},
  {path:'lists', component: ListsPageComponent},
  {path:'lists/:id', component:ListDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
