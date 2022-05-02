import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcemanComponent } from './iceman.component';

describe('IcemanComponent', () => {
  let component: IcemanComponent;
  let fixture: ComponentFixture<IcemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
