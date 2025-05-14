import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'inicio', component: InicioComponent},

];
