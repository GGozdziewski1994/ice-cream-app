import { TestBed } from '@angular/core/testing';

import { ClientOrderService } from './client-order.service';

describe('ClientService', () => {
  let service: ClientOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
