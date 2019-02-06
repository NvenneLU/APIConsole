import { Component } from '@angular/core';
import { ApiService } from '../../../@core/data/api.service';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'api-form',
  templateUrl: './apiform.component.html',
  styleUrls: ['./apiform.component.scss']
})
export class ApiFormComponent {
  permSource: any[] = [];
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      perm: {
        title: 'Permission',
        type: 'text',
        editor: {
          type: 'completer',
          config: {
            completer: {
              data: {},
              title: "Test"
            }
          }
        },
      },
    },

  };


  source: LocalDataSource = new LocalDataSource();
  user: string;
  desc: string;

  constructor(private service: ApiService) {
    let data = this.service.getPerms()
    data.subscribe((data: any) => {
      let permSource: any[] = [];
      for(let perm in data.perms) {
        for(let i = 0; i < data.perms[perm].length; i++) {
          let p = data.perms[perm][i];

          permSource.push(perm + "." + p.perm);
        }
      }
      this.settings.columns.perm.editor.config.completer.data = permSource;
      this.permSource = permSource;


    })
  }

  createKey() {
    this.source.getAll().then(data => {
      let perms: string[] = [];
      for(let i = 0; i < data.length; i++) {
        perms.push(data[i].perm);
      }
      this.service.createKey(this.user, this.desc, perms).subscribe(test => console.log(test));
    });
  }



}
