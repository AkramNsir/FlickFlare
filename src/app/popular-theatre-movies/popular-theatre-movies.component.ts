import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-popular-theatre-movies',
  templateUrl: './popular-theatre-movies.component.html',
  styleUrl: './popular-theatre-movies.component.scss'
})
export class PopularTheatreMoviesComponent implements OnInit{
  theatreMovies: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTheatreMovies();
  }

  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
