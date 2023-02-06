import { TestBed } from '@angular/core/testing';

import { MeditateDataService } from './meditate-data.service';

describe('MeditateDataService', () => {
  let service: MeditateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeditateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
