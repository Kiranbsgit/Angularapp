import { TestBed } from '@angular/core/testing';

import { session } from './session.service';

describe('SessionService', () => {
  let service: session;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(session);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
