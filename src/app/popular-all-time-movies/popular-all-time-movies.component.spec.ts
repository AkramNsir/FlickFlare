import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAllTimeMoviesComponent } from './popular-all-time-movies.component';

describe('PopularAllTimeMoviesComponent', () => {
  let component: PopularAllTimeMoviesComponent;
  let fixture: ComponentFixture<PopularAllTimeMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularAllTimeMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularAllTimeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
