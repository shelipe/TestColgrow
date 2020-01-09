import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
 
 fecha : Date;
 medicion : string;
 ubicacion : string;
 especie: string;
 usuario : string;
 id_medicion: number;
}



@Component({
  selector: 'ngx-datatablescharts',
  templateUrl: './datatablescharts.component.html',
  styleUrls: ['./datatablescharts.component.scss'],
})
export class DatatableschartsComponent {
  boton = "";
  //customColumn = 'fecha';
  defaultColumns = [ 'fecha','medicion', 'ubicacion', 'especie' , 'usuario', 'id_medicion'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { fecha: new Date(), medicion: '5cm', ubicacion: 'porAlla', especie: 'Palta', usuario: 'Juan', id_medicion: 4 }
    },
    { 
      data: { fecha:  new Date(), medicion: '2cm', ubicacion: 'porAca', especie: 'Palta', usuario: 'Pedro', id_medicion: 1 } 
    },
    { 
      data: { fecha:  new Date(), medicion: '6cm', ubicacion: 'Entre ese y ese', especie: 'Palta', usuario: 'Diego', id_medicion: 3 }
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}


  
