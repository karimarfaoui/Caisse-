import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AccesService } from '../../@services/acces.service';
import { Acces } from '../../models/acces.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-get-acces',
  standalone: true,
  imports: [ HttpClientModule, MatTableModule,  MatPaginator, MatSort, NgFor, CommonModule],
  templateUrl: './get-acces.component.html',
  styleUrl: './get-acces.component.css'
})
export class GetAccesComponent implements OnInit {
  displayedColumns: string[] = [ 'id','caissier', 'admin', 'caissierr', 'libre', 'occupe'];
  dataSource = new MatTableDataSource<Acces>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: AccesService ) {}

  ngOnInit() {
    this.dataService.fetchAcces().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}
