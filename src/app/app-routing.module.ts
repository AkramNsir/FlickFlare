import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { AuthGuard } from './auth.guard';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { PopularTheatreMoviesComponent } from './popular-theatre-movies/popular-theatre-movies.component';
import { PopularAllTimeMoviesComponent } from './popular-all-time-movies/popular-all-time-movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'trending-movies', component: TrendingMoviesComponent, canActivate: [AuthGuard]},
  { path: 'popular-theatre-movies', component: PopularTheatreMoviesComponent, canActivate: [AuthGuard]},
  { path: 'all-time-popular-movies', component: PopularAllTimeMoviesComponent, canActivate: [AuthGuard]},
  { path: 'movie/:type/:id', component: MovieComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
