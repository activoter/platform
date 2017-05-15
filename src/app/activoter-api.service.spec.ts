import { TestBed, inject } from '@angular/core/testing';
import { ActivoterApiService } from './activoter-api.service';

describe('ActivoterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivoterApiService]
    });
  });
  it('should ...', inject([ActivoterApiService], (service: ActivoterApiService) => {
    expect(service).toBeTruthy();
  }));
});