import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedSeriesListComponent } from './searched-series-list.component';

describe('SearchedSeriesListComponent', () => {
  let component: SearchedSeriesListComponent;
  let fixture: ComponentFixture<SearchedSeriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedSeriesListComponent]
    });
    fixture = TestBed.createComponent(SearchedSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
