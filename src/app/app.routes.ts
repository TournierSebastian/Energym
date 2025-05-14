import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { InicioComponent } from './Pages/inicio/inicio.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'Iniciar-sesion', component: LoginComponent},
    {path: 'inicio', component: InicioComponent}

];
