import { TestBed } from '@angular/core/testing';

import { NgTailwintifyService } from './ng-tailwintify.service';

describe('NgTailwintifyService', () => {
  let service: NgTailwintifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTailwintifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
