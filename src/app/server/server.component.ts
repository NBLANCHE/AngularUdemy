import { Component } from '@angular/core'; // fetch the definition of Component from angular core (which contains core functionalities)

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color:white;
    }
    
    `]
})  // adding a decorator, and giving it a javascript object to configure it i.e. metadata 
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
