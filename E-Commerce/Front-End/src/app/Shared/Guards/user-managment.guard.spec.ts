import { TestBed } from '@angular/core/testing';

import { UserManagmentGuard } from './user-managment.guard';

describe('UserManagmentGuard', () => {
  let guard: UserManagmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserManagmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
