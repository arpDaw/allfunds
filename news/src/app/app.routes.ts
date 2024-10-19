import { Routes } from '@angular/router';
import { NewsLandingComponent } from './features/news-landing/news-landing.component';

export const routes: Routes = [
    {
        path: '',
        component: NewsLandingComponent,
        title: 'News',
    },
    {
        path: 'archived',
        component: NewsLandingComponent,
        title: 'News archived',
    },
];
