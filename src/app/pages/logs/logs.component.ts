import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../@core/data/socket.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'ngx-logs',
  templateUrl: './logs.component.html',
})
export class LogsComponent implements OnInit, OnDestroy {

  private _logSub: Subscription;
  log: string = '';

  constructor(private socket: SocketService) {}

  ngOnInit() {
    this.socket.getLogs();
    this._logSub = this.socket.log.subscribe(log => {this.log += '\n' + log});
  }

  ngOnDestroy() {
    this._logSub.unsubscribe();
  }

}
