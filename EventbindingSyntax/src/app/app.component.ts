import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">
    <h1 (click)="handleClick($event)">{{ message }}</h1>
    <h1 (click)="handleClick($event)">{{ newMessage }}</h1>
    <input value="123">
    <input [value]="message" (input)="handleInput($event)">
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
  newMessage!: string;

  ngOnInit() {
    this.message = 'Heyyy Aayush'
  }

  handleClick(event: Event) {
    console.log('Clicked')
    console.log(event)
  }

  handleInput(event: Event){
    console.log(event.target) //this is going to give the element itself
    const { value } = event.target as HTMLInputElement; // This is type casting in typescript
    // here we can obtain our value by referencing our event.target here we're using some destructuring so we can pull our property out
    console.log(value)
    this.message = value; //this is mutating our initial state value 
    this.newMessage = value;
  }
}
