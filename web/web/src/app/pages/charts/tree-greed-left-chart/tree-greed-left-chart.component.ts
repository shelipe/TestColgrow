import { Component } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  campo: string;
  sector: string;
  frutos: string;
  items?: number;
}
@Component({
  selector: 'ngx-tree-greed-left-chart',
  templateUrl: './tree-greed-left-chart.component.html',
  styleUrls: ['./tree-greed-left-chart.component.scss']
})
export class TreeGreedLeftChartComponent  {
  allColumns = [ 'campo', 'sector', 'frutos', 'items' ];
  

  data: TreeNode<FSEntry>[] = [
    {
      data: { campo: 'Projects', sector: '1.8 MB', items: 5, frutos: 'dir' },
      children: [
        { data: { campo: 'project-1.doc', frutos: 'doc', sector: '240 KB' } },
        { data: { campo: 'project-2.doc', frutos: 'doc', sector: '290 KB' } },
        {
          data: { campo: 'project-3', frutos: 'dir', sector: '466 KB', items: 3 },
          children: [
            { data: { campo: 'project-3A.doc', frutos: 'doc', sector: '200 KB' } },
            { data: { campo: 'project-3B.doc', frutos: 'doc', sector: '266 KB' } },
            { data: { campo: 'project-3C.doc', frutos: 'doc', sector: '0' } },
          ],
        },
        { data: { campo: 'project-4.docx', frutos: 'docx', sector: '900 KB' } },
      ],
    },
    {
      data: { campo: 'Reports', frutos: 'dir', sector: '400 KB', items: 2 },
      children: [
        {
          data: { campo: 'Report 1', frutos: 'dir', sector: '100 KB', items: 1 },
          children: [
            { data: { campo: 'report-1.doc', frutos: 'doc', sector: '100 KB' } },
          ],
        },
        {
          data: { campo: 'Report 2', frutos: 'dir', sector: '300 KB', items: 2 },
          children: [
            { data: { campo: 'report-2.doc', frutos: 'doc', sector: '290 KB' } },
            { data: { campo: 'report-2-note.txt', frutos: 'txt', sector: '10 KB' } },
          ],
        },
      ],
    },
    {
      data: { campo: 'Other', frutos: 'dir', sector: '109 MB', items: 2 },
      children: [
        { data: { campo: 'backup.bkp', frutos: 'bkp', sector: '107 MB' } },
        { data: { campo: 'secret-note.txt', frutos: 'txt', sector: '2 MB' } },
      ],
    },
  ];
}
