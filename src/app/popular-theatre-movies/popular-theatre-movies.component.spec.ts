import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTheatreMoviesComponent } from './popular-theatre-movies.component';

describe('PopularTheatreMoviesComponent', () => {
  let component: PopularTheatreMoviesComponent;
  let fixture: ComponentFixture<PopularTheatreMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularTheatreMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularTheatreMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
