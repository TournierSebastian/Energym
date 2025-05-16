import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sucursalGuard } from './sucursal.guard';

describe('sucursalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sucursalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
