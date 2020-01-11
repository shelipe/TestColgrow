import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

import { NbCardModule, NbDatepickerModule, NbStepperModule, NbSelectModule, NbButtonModule,  NbTreeGridModule, } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { ChartjsMultipleXaxisComponent } from './chartjs/chartjs-multiple-xaxis.component';
import { PlantSelectorComponent } from './plant-selector/plant-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatableschartsComponent } from './datatablescharts/datatablescharts.component';
import { TreeGreedLeftChartComponent } from './tree-greed-left-chart/tree-greed-left-chart.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'
import { from } from 'rxjs';

import { NgChartjsModule } from 'ng-chartjs';
// For MDB Angular Free






const components = [
  ChartjsMultipleXaxisComponent,
  PlantSelectorComponent,
  DatatableschartsComponent,
  TreeGreedLeftChartComponent,

];

@NgModule({
  imports: [
    ThemeModule,
    ChartsRoutingModule,
    ChartModule,
    NbCardModule,
    NbDatepickerModule,
    NbStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbButtonModule,
    NbTreeGridModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTreeModule,
    MatIconModule,
    NgChartjsModule
  ],
  declarations: [...routedComponents, ...components, ],
})
export class ChartsModule {}
