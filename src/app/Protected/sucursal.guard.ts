import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const sucursalGuard: CanActivateFn = (route, state) => {

  const toastrService = inject(ToastrService)
  const router = inject(Router);

  const sucursal = localStorage.getItem('Sucursal')
  if (sucursal && sucursal.trim() !== '') {
    return true;
  } else {
    toastrService.error('Selecionar una sucursal');
    router.navigate(['inicio'])
    return true;
  }
};
