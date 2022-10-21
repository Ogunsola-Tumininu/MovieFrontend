import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './Component/detail/detail.component';
import { HomeComponent } from './Component/home/home.component';
import { MoviesComponent } from './Component/movies/movies.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'movies/:term', component: MoviesComponent},
  {path:'detail/:title', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
