// Angular Logic
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

// My Application logic
// import { DonutService } from './admin/services/donut.service';


export const AppRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes').then(x => x.AdminRoutes),
        providers: [importProvidersFrom(HttpClientModule)/* DonutService */]
    },
    {
        path: '', //Empty path here is going to correspond with empty path in the Url
        pathMatch: 'full',
        redirectTo: 'admin',
    },
    {
        path: '**', // Wildcard selector
        redirectTo: 'admin',
    },

];
