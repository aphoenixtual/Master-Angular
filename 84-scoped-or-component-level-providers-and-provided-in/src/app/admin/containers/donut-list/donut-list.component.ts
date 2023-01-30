// Angular Logic
import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// My Application logic
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
    standalone: true,
    imports: [RouterModule, NgIf, NgForOf, DonutCardComponent],
    providers:[DonutService],
    selector: 'app-donut-list',
    template: `
  <div>
    <div class="donut-list-actions">
        <a routerLink="new" class="btn btn--green">
            New Donut
            <img src="/assets/img/icon/plus.svg" />
        </a>
    </div>
    <ng-container *ngIf="donuts?.length; else nothing"> <!-- This is the first way to use ngIf as a container for grouping-->

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
        `
            .donut-list {
                &-actions {
                    margin-bottom: 10px;
                }
            }
        `,
    ],
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
