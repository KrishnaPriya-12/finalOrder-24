import { TestBed } from '@angular/core/testing';

import { OrderOperationService } from './order-operation.service';

describe('OrderOperationService', () => {
  let service: OrderOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
