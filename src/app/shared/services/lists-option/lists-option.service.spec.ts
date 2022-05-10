import { TestBed } from '@angular/core/testing';

import { ListOptionService } from './lists-option.service';

describe('ClientListOptionService', () => {
  let service: ListOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
