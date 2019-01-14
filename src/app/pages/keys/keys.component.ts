import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../@core/data/api.service';


@Component({
  selector: 'ngx-keys',
  templateUrl: './keys.component.html',
})
export class KeysComponent {
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
      confirmDelete: true,
    },
    columns: {
      apikey: {
        title: 'API KEY',
        type: 'text',
        editable: false,
      },
      user: {
        title: 'User',
        type: 'text',
      },
      desc: {
        title: 'Description',
        type: 'text',
      },
      perms: {
        title: 'Permission',
        type: 'text',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: ApiService) {
    const data = this.service.getKeys();
    data.subscribe((data: any) => this.source.load(data.keys));
  }



}
