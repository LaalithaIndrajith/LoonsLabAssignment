/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Restaurant_serviceService } from './restaurant_service.service';

describe('Service: Restaurant_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Restaurant_serviceService]
    });
  });

  it('should ...', inject([Restaurant_serviceService], (service: Restaurant_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
