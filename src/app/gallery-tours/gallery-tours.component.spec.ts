import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryToursComponent } from './gallery-tours.component';

describe('GalleryToursComponent', () => {
  let component: GalleryToursComponent;
  let fixture: ComponentFixture<GalleryToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
