import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './feature/feature.module';
import { FooterComponent } from './footer/footer.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { PopularTheatreMoviesComponent } from './popular-theatre-movies/popular-theatre-movies.component';
import { PopularAllTimeMoviesComponent } from './popular-all-time-movies/popular-all-time-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    FooterComponent,
    MovieSearchComponent,
    TrendingMoviesComponent,
    PopularTheatreMoviesComponent,
    PopularAllTimeMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeatureModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
