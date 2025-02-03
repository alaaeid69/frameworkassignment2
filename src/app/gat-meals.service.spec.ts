import { TestBed } from '@angular/core/testing';

import { GatMealsService } from './gat-meals.service';

describe('GatMealsService', () => {
  let service: GatMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
