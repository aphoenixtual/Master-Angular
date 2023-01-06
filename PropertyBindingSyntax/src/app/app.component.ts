import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">{{message}}
    {{ message === 'Hey Aayush'}}
    {{ message.length }}
    {{ message.length < 12 }}
    {{ message.length ? message : 'Amazon prime special' }}
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
    this.message = ''
  }
}
