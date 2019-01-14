import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService  {
  constructor(private socket: Socket) { }

  log = this.socket.fromEvent<string>('log');

  getLogs() {
    this.socket.emit('getLogs');
    console.log("test");
  }
}
