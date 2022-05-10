import { TestBed } from '@angular/core/testing';

import { ClientFavsService } from './client-favs.service';

describe('ClientFavsService', () => {
  let service: ClientFavsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientFavsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
