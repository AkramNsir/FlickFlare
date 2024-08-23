import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  n: number = 0;
  movies$!: Observable<any[]>;
  isFocused: boolean = true;


  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // this.movies$ = this.movieService.getMovies$();
    // this.movies$.subscribe(movies => {
    //   if (movies.length === 0) {
    //     this.isFocused = false;
    //   }else {
    //     this.isFocused = true;
    //   }
    // });
  }

  onRatingChange(newRating: number) {
    this.rating = newRating; 
    this.ratingChange.emit(newRating); 
    // console.log(this.rating);
  }
}