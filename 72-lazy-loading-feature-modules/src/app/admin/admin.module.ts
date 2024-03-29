import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

// components
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';

export const routes: Routes = [
    { path: 'donuts', component: DonutListComponent },
    { path: 'donut', component: DonutSingleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'donuts' },
]


// services

// guards

// directives
@NgModule({
    declarations: [
        DonutListComponent,
        DonutSingleComponent,
        DonutCardComponent,
        DonutFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),],
})
export class AdminModule { }
