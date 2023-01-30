import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; //Entry Component


export const routes: Routes = [
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

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent],
})
export class AppModule { }
