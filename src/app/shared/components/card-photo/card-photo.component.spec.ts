import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhotoComponent } from './card-photo.component';

describe('CardPhotoComponent', () => {
  let component: CardPhotoComponent;
  let fixture: ComponentFixture<CardPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPhotoComponent]
    });
    fixture = TestBed.createComponent(CardPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(true).toBeTrue();
  });
});
