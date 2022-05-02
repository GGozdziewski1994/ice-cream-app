import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamCartComponent } from './ice-cream-cart.component';

describe('IceCreamCartComponent', () => {
  let component: IceCreamCartComponent;
  let fixture: ComponentFixture<IceCreamCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCreamCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
