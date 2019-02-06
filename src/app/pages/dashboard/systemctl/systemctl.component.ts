import { Component, OnDestroy, OnInit } from '@angular/core';
import * as eva from 'eva-icons';
import { SocketService } from '../../../@core/data/socket.service';
import { Subscription, Subject } from 'rxjs';


@Component({
  selector: 'api-systemctl',
  templateUrl: './systemctl.component.html',
  styleUrls: ['./systemctl.component.scss']
})
export class SystemctlComponent implements OnInit {

  private _statusSub: Subscription;

  constructor(private socket: SocketService) { }

  colors = {
    start: 'icon nb-square green',
    restart: 'icon nb-square orange',
    stop: 'icon nb-square red'
  }

  color = this.colors.stop;
  stat: string;

  ngOnInit() {
    eva.replace();
    this._statusSub = this.socket.status.subscribe(status => {
      console.log(parseInt(status) == 1);
      if(parseInt(status) == 1) {
        this.color = this.colors.start;
      } else {
        this.color = this.colors.stop;
      }
    });
  }

  ngOnDestroy() {
    this._statusSub.unsubscribe();
  }

  start() {
    this.socket.startServer();
  }

  stop() {
    this.socket.stopServer();
  }

  restart() {
    this.color = this.colors.restart;
    this.socket.restartServer();
  }


}
