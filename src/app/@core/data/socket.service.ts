import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService  {
  constructor(private socket: Socket) { }

  log = this.socket.fromEvent<string>('log');
  logList = this.socket.fromEvent<string[]>('logList');
  selectLog = this.socket.fromEvent<string>('selectedLog');
  status = this.socket.fromEvent<string>('status');


  getLogList() {
    this.socket.emit('getLogList');
  }

  getLog(log: string) {
    this.socket.emit('selectLog', log);
  }

  startServer() {
    this.socket.emit('start');
  }
  restartServer() {
    this.socket.emit('restart');
  }
  stopServer() {
    this.socket.emit('stop');
  }
}
