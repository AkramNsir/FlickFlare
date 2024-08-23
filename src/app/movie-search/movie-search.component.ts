import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movies$!: Observable<any[]>;
  isSearchMenuVisible = false;

  constructor(private movieService: MovieService, private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies$();
  }

  search(term: string): void {
    if (term) {
      this.movieService.search(term);
      this.isSearchMenuVisible = true;
    } else {
      this.isSearchMenuVisible = false;
    }  
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1);
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isSearchMenuVisible = false;
    }
  }
}
