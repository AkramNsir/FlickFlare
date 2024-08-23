import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, forkJoin } from 'rxjs';
import { catchError, map, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private searchTerms = new Subject<string>();
  private movies$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchMovies(term))
    );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  getMovies$(): Observable<any[]> {
    return this.movies$;
  }

  private searchMovies(term: string): Observable<any[]> {
    if (!term.trim()) {
      return of([]);
    }

    const urls = [
      'http://localhost:4200/assets/data/popular-movies.json',
      'http://localhost:4200/assets/data/trending-movies.json',
      'http://localhost:4200/assets/data/theatre-movies.json'
    ];

    const requests = urls.map(url => this.http.get<any[]>(url).pipe(
      map(movies => movies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase())))
    ));

    return forkJoin(requests).pipe(
      map(results => results.flat()), // Flatten the array of arrays
      tap(x => x.length ?
        this.log(`Movies: found movies matching "${term}"`) :
        this.log(`Movies: no movies matching "${term}"`)),
      catchError(this.handleError<any[]>('searchMovies', []))
    );
  }

  private log(message: string) {
    console.log(`MovieService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
