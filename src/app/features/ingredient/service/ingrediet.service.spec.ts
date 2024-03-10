import { TestBed } from '@angular/core/testing';

import { IngredietService } from './ingrediet.service';

describe('IngredietService', () => {
  let service: IngredietService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredietService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
