import { Routes } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'tournaments',
        component: TournamentsComponent,
        title: 'Tournaments'
    }
];
