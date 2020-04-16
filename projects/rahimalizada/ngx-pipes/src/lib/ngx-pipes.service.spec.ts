import { TestBed } from '@angular/core/testing';

import { NgxPipesService } from './ngx-pipes.service';

describe('NgxPipesService', () => {
  let service: NgxPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
