import { Component, OnInit,Input, ViewChild,AfterViewInit  } from '@angular/core';
import { MatTableDataSource,  MatTable, MatSort} from '@angular/material';
import { MatPaginator } from '@angular/material';
/*SERVICES*/
import { MeasurementsService } from '../../../@core/api/measurements.service';
/*MODELS*/
import { Field, Sector, Plant, Fruit, ApiResponse, Measurement } from '../../../@core/api/models';

@Component({
  selector: 'ngx-datatablescharts',
  templateUrl: './datatablescharts.component.html',
  styleUrls: ['./datatablescharts.component.scss'],
})
export class DatatableschartsComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id','ecuatorial_length','polar_length','fruitId'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private measurementsService: MeasurementsService){  }

  ngOnInit() {
    //this.measurementsService.getMeasurements().subscribe(Response => console.log('measurements',Response.payload));
    this.measurementsService.getMeasurements().subscribe(Response => (this.dataSource.data = Response.payload));
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
