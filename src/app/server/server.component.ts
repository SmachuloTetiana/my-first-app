import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			color: white;
		}
	`]
})

export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';

	@Output() intervalFired = new EventEmitter<number>();
	interval;
	lastNumber = 0;

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getServerStatus() {
		return this.serverStatus;
	}

	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}

	onStartGame() {
	  this.interval = setInterval( () => {
		  this.intervalFired.emit(this.lastNumber + 1);
		  this.lastNumber++;
		}, 1000);
	}

	onStopGame() {
		clearInterval(this.interval);
	}
}