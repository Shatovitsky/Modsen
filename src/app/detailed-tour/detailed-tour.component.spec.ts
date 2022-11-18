import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTourComponent } from './detailed-tour.component';

describe('DetailedTourComponent', () => {
  let component: DetailedTourComponent;
  let fixture: ComponentFixture<DetailedTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
