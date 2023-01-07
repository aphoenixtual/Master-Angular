import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
        <app-donut-card></app-donut-card>
        <div class="donut-card">
          <img
            src="/assets/img/{{ donut.icon }}.svg"
            [alt]="donut.name"
            class="donut-card-icon"
          />
          <div>
            <p class="donut-card-name">
                {{ donut.name }}
            </p>
            <p class="donut-card-price">
                {{ donut.price }}
            </p>
          </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
    donut!: Donut;
    donuts!: Donut[];
    constructor() {}
    ngOnInit(): void {
        this.donuts = [
            {
                id: 'y8z0As',
                name: 'Just-Chocolate',
                icon: 'just-chocolate',
                price: 119,
                description: 'For the pure chocoholic.'
            },
            {
                id: '3u98K1',
                name: 'Glazed Fudge',
                icon: 'glazed-fudge',
                price: 129,
                description: 'Sticky perfection.'
            },
            {
                id: 'ae098s',
                name: 'Caramel Swirl',
                icon: 'caramel-swirl',
                price: 129,
                description: 'Chocolate drizzled with caramel.'
            }
        ]

        this.donut = this.donuts[2];
       // this.donut = JSON.stringify(this.donuts[0]); // JS way of implement pipe
    }

}
