import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../@core/data/socket.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'ngx-logs',
  templateUrl: './logs.component.html',
})
export class LogsComponent implements OnInit, OnDestroy {

  private _logSub: Subscription;
  private _logListSub: Subscription;
  private _selectLog: Subscription;
  log: string = '';
  logList: string[];
  selectedLog: string = '';

  constructor(private socket: SocketService) {}

  ngOnInit() {
    this.socket.getLiveLog();
    this.socket.getLogList();
    this._logSub = this.socket.log.subscribe(log => {this.log += '\n' + log});
    this._logListSub = this.socket.logList.subscribe(logList => {this.logList = logList});
    this._selectLog = this.socket.selectLog.subscribe(log => {this.selectedLog = log});
  }

  ngOnDestroy() {
    this._logSub.unsubscribe();
    this._logListSub.unsubscribe();
    this._selectLog.unsubscribe();
  }

  viewLog(log: string) {
    this.socket.getLog(log);
  }

}
