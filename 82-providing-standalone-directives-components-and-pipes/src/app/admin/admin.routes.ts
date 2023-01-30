
import { Routes } from '@angular/router';

// containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

// components

export const AdminRoutes: Routes = [
    { path: 'donuts', component: DonutListComponent },
    { path: 'donuts/new', component: DonutSingleComponent, data: { isEdit: false} },
    { path: 'donuts/:id', component: DonutSingleComponent, data: {isEdit: true} },//:id acts as a placeholder or dynamic variable 
    { path: '', pathMatch: 'full', redirectTo: 'donuts' },
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
