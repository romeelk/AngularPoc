import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports:[RouterTestingModule],
      providers: [ProductDetailGuard]
    });
  });

  it('should ...', inject([ProductDetailGuard], (guard: ProductDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
