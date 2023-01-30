import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
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
