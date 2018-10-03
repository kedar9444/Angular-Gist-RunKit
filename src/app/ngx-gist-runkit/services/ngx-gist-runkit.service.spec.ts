import { TestBed, inject } from '@angular/core/testing';

import { NgxGistRunkitService } from './ngx-gist-runkit.service';

describe('NgxGistRunkitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxGistRunkitService]
    });
  });

  it('should be created', inject([NgxGistRunkitService], (service: NgxGistRunkitService) => {
    expect(service).toBeTruthy();
  }));
});
