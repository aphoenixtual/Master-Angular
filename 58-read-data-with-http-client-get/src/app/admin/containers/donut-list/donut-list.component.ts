import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
    selector: 'app-donut-list',
    template: `
  <div>
    <ng-container *ngIf="donuts.length; else nothing"> <!-- This is the first way to use ngIf as a container for grouping-->

        <app-donut-card 
            *ngFor="let donut of donuts; trackBy: trackById" 
            [donut]="donut">
        </app-donut-card>

    </ng-container>

    <ng-template #nothing>
        <p>No Donuts here...</p>
    </ng-template>

  </div>
  `,
    styles: [
    ]
})
export class DonutListComponent implements OnInit {
    donuts!: Donut[];

    constructor(private donutService: DonutService) { }

    ngOnInit(): void {
        this.donutService
            .read()
            .subscribe((donuts: Donut[]) => (this.donuts = donuts));
    }//Asynchronous operations : first Observable

    trackById(index: number, value: Donut) {
        return value.id;
    }

}
