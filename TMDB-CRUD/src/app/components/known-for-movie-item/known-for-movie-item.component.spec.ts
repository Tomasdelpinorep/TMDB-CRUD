import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownForMovieItemComponent } from './known-for-movie-item.component';

describe('KnownForMovieItemComponent', () => {
  let component: KnownForMovieItemComponent;
  let fixture: ComponentFixture<KnownForMovieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnownForMovieItemComponent]
    });
    fixture = TestBed.createComponent(KnownForMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
