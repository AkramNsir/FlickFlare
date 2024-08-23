import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';  // Import map operator from rxjs/operators

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http
      .get<any[]>('http://localhost:4200/assets/data/trending-movies.json')
      .pipe(
        map(movies => movies.slice(0, 5))  
      )
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }

  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

  goToTrendingMovies() {
    this.router.navigate(['trending-movies'])
  }

  goToPopularTheatreMovies() {
    this.router.navigate(['popular-theatre-movies'])
  }

  goToAllTimePopularMovies() {
    this.router.navigate(['all-time-popular-movies'])
  }
}