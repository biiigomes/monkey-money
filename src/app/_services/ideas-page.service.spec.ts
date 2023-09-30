import { TestBed } from '@angular/core/testing';

import { IdeasPageService } from './ideas-page.service';

describe('IdeasPageService', () => {
  let service: IdeasPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeasPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
