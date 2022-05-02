import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteIceCreamComponent } from './favorite-ice-cream.component';

describe('FavoriteIceCreamComponent', () => {
  let component: FavoriteIceCreamComponent;
  let fixture: ComponentFixture<FavoriteIceCreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteIceCreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteIceCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
