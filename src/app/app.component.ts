import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  	h1{
  		color: blue;
  	}
  `]
})
export class AppComponent {
  username = '';
  showSecret  = false;
  log = [];

  interval = 0;
  timer;

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  
  onStartGame() {
    this.timer = setInterval(() => {
      this.interval++;
    }, 1000);
  }

  resetInput() {
    this.username = '';
  }

  onPushNumbers() {
    this.log.push(this.log.length + 1);
  }

  onIntervalFired(FiredNumber: number) {
    if(FiredNumber % 2 === 0) {
      this.evenNumbers.push(FiredNumber);
    } else {
      this.oddNumbers.push(FiredNumber);
    }
  }

}
