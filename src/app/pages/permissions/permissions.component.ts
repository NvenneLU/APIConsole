import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../@core/data/api.service';



@Component({
  selector: 'ngx-permissions',
  templateUrl: './permissions.component.html',
})
export class PermissionsComponent {



  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      perm: {
        title: 'Permission',
        type: 'text',
        editable: false,
      },
      group: {
        title: 'Group',
        type: 'text',
        editable: false,
      },
      action: {
        title: 'Action',
        type: 'text',
        editable: false,
      },
      desc: {
        title: 'Description',
        type: 'text',
        editable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  permSource: any[] = [];

  constructor(private service: ApiService) {
    const data = this.service.getPerms();
    data.subscribe((data: any) => {

      for(let perm in data.perms) {
        console.log(data.perms[perm]);
        for(let i = 0; i < data.perms[perm].length; i++) {
          let p = data.perms[perm][i];

          this.permSource.push({perm: perm + "." + p.perm, group: perm, action: p.perm, desc: p.desc});
        }
      }
      console.log(this.permSource)
      this.source.load(this.permSource);
    });
  }
}
