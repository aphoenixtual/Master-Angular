import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  template: `
   <div>
    <donut-form 
        [donut]="donut"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
    ></donut-form>
   </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit {
    
    donut!: Donut;


  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    //CRUD
    //donutService - Smart contianer
    this.donut = this.donutService.readOne('l3Mno')
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut);
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut);
  }

}
