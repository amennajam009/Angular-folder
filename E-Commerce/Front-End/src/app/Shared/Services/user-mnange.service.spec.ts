import { TestBed } from '@angular/core/testing';

import { UserMnangeService } from './user-mnange.service';

describe('UserMnangeService', () => {
  let service: UserMnangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMnangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
