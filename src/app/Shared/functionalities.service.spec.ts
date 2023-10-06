/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FunctionalitiesService } from './functionalities.service';

describe('Service: Functionalities', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunctionalitiesService]
    });
  });

  it('should ...', inject([FunctionalitiesService], (service: FunctionalitiesService) => {
    expect(service).toBeTruthy();
  }));
});
