import { TestBed } from '@angular/core/testing';

import { ProductOperationService } from './product-operation.service';

describe('ProductOperationService', () => {
  let service: ProductOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
