import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownForListComponent } from './known-for-list.component';

describe('KnownForListComponent', () => {
  let component: KnownForListComponent;
  let fixture: ComponentFixture<KnownForListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnownForListComponent]
    });
    fixture = TestBed.createComponent(KnownForListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
