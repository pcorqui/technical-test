import { TestBed } from '@angular/core/testing';

import { ProvideersService } from './provideers.service';

describe('ProvideersService', () => {
  let service: ProvideersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
