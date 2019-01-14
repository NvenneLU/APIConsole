import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import * as eva from 'eva-icons';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'api-systemctl',
  templateUrl: './systemctl.component.html',
  styleUrls: ['./systemctl.component.scss']
})
export class SystemctlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    eva.replace()
  }


}
