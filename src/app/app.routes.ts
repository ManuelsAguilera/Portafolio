import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Proyectos } from './pages/proyectos/proyectos';
import { Hobbies } from './pages/hobbies/hobbies';
import { Contactame } from './pages/contactame/contactame';
import { Habilidades } from './pages/habilidades/habilidades';





export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'proyectos',
        component: Proyectos
    },
    {
        path: 'hobbies',
        component: Hobbies
    },
    {
        path: 'habilidades',
        component: Habilidades // or create an About component
    },
    {
        path: 'contactame',
        component: Contactame // or create a Contact component
    },
    {
        path: '**',
        redirectTo: ''
    }
];
