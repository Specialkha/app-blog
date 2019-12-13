import { TestBed } from '@angular/core/testing';

import { DragdisabledService } from './dragdisabled.service';

describe('DragdisabledService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragdisabledService = TestBed.get(DragdisabledService);
    expect(service).toBeTruthy();
  });
});
