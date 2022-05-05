import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamItemComponent } from './ice-cream-item.component';

describe('IceCreamItemComponent', () => {
  let component: IceCreamItemComponent;
  let fixture: ComponentFixture<IceCreamItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCreamItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
