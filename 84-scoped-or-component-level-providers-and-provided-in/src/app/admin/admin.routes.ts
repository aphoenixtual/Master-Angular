
import { Routes } from '@angular/router';

// containers
// import { DonutListComponent } from './containers/donut-list/donut-list.component';
// import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

// components

export const AdminRoutes: Routes = [
    {
        path: 'donuts',
        loadComponent: () =>
            import('../admin/containers/donut-list/donut-list.component').then(
                (x) => x.DonutListComponent
            ),
    },
    {
        path: 'donuts/new',
        loadComponent: () =>
            import('../admin/containers/donut-single/donut-single.component').then(
                (x) => x.DonutSingleComponent
            ), data: { isEdit: false }
    },
    {
        path: 'donuts/:id',
        loadComponent: () =>
            import('../admin/containers/donut-single/donut-single.component').then(
                (x) => x.DonutSingleComponent
            ), data: { isEdit: true }
    },//:id acts as a placeholder or dynamic variable 

    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'donuts' 
    },
]


// services

// guards

// directives
// @NgModule({
//     declarations: [
//         DonutListComponent,
//         DonutSingleComponent,
//         DonutCardComponent,
//         DonutFormComponent
//     ],
//     imports: [
//         CommonModule,
//         FormsModule,
//         RouterModule.forChild(routes),],
// })
// export class AdminModule { }
