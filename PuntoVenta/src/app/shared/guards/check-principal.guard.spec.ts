import { TestBed } from '@angular/core/testing';

import { CheckPrincipalGuard } from './check-principal.guard';

describe('CheckPrincipalGuard', () => {
  let guard: CheckPrincipalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckPrincipalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
