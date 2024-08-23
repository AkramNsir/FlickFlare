import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnChanges {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;
  reviews: any[] = [];

  selectedName: string = '';
  selectedReview: string = '';
  selectedRating: number = 0;
  errorMsg: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['reviews']) {
      localStorage.setItem(
        `movie_reviews_${this.movie.id}_${this.movie.name}`,
        JSON.stringify(this.reviews)
      );
    }
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
        if (localStorage.getItem(`movie_reviews_${this.movie.id}_${this.movie.name}`) === null) {
          this.reviews = this.movie.reviews;
        } else {
          this.reviews = JSON.parse(
            localStorage.getItem(
              `movie_reviews_${this.movie.id}_${this.movie.name}`
            ) || '[]'
          );
        }
      }
    });
  }

  update(val: number) {
    this.selectedRating = val;
  }

  submitReview(): void {
    if (this.selectedName !== '' && this.selectedReview !== '') {
      const review = {
        author: this.selectedName,
        published_on: new Date(),
        review: this.selectedReview,
        rating: this.selectedRating,
      };
      this.reviews.push(review);

      // Save reviews to localStorage
      localStorage.setItem(
        `movie_reviews_${this.movie.id}_${this.movie.name}`,
        JSON.stringify(this.reviews)
      );

      this.selectedName = '';
      this.selectedReview = '';
      this.selectedRating = 0;
      this.errorMsg = '';
    } else if (this.selectedName === '') {
      this.errorMsg = 'name is required';
    } else if (this.selectedReview === '') {
      this.errorMsg = 'review is required';
    }
  }

  showReviews(showReview: boolean): boolean {
    if (showReview === true) {
      showReview = false;
    } else {
      showReview = true;
    }

    return showReview;
  }
}
