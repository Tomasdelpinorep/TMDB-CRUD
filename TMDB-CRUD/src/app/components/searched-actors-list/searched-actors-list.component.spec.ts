import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedActorsListComponent } from './searched-actors-list.component';

describe('SearchedActorsListComponent', () => {
  let component: SearchedActorsListComponent;
  let fixture: ComponentFixture<SearchedActorsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedActorsListComponent]
    });
    fixture = TestBed.createComponent(SearchedActorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
