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

  getLiveLog() {
    this.socket.emit('getLiveLog');
  }

  getLogList() {
    this.socket.emit('getLogList');
  }

  getLog(log: string) {
    this.socket.emit('selectLog', log);
  }
}
