import { TestBed } from '@angular/core/testing';

import { DataciService } from './dataci.service';

describe('DataciService', () => {
  let service: DataciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
