import { TestBed } from '@angular/core/testing';

import { ClientFavouriteIceCreamService } from './client-favourite-ice-service.service';

describe('ClientFavsService', () => {
  let service: ClientFavouriteIceCreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientFavouriteIceCreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
