import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { RegisterComponent } from './Pages/register/register.component';
import { authGuard } from './Protected/auth.guard';
import { ClasesComponent } from './Pages/clases/clases.component';
import { sucursalGuard } from './Protected/sucursal.guard';
import { PerfilComponent } from './Pages/perfil/perfil.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'Iniciar-sesion', component: LoginComponent},
    {path: 'Registrarse', component: RegisterComponent},
    {path: 'inicio', component: InicioComponent, canActivate: [authGuard]},
    {path: 'clases', component: ClasesComponent, canActivate: [authGuard, sucursalGuard]},
    {path: 'perfil', component: PerfilComponent, canActivate: [authGuard]}

];
