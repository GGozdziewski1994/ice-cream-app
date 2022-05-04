import { TestBed } from '@angular/core/testing';

import { IcemanService } from './iceman.service';

describe('IcemanService', () => {
  let service: IcemanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcemanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
