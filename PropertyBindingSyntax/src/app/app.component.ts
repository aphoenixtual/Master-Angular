import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">{{message}}
    <h1>{{ message.length ? message : 'Amazon prime special' }}</h1>
    <h1 [innerText]="message.length ? message : 'Amazon prime special'"></h1>
    <input value="123">
    <input [value]="message">
  </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;

  constructor() {}
  ngOnInit() {
    this.message = 'Heyyy Aayush'
  }
}
