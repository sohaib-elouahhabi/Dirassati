import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';
// @ts-ignore
describe('AuthServiceService', () => {
  let service: AuthServiceService;
  // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceService);
  });

  // @ts-ignore
  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
