import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EntreService } from '../../@services/entre.service';
import { Entre } from '../../models/entre.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-get-bon',
  standalone: true,
  imports: [ HttpClientModule, MatTableModule,  MatPaginator, MatSort, NgFor, CommonModule],
  templateUrl: './get-bon.component.html',
  styleUrl: './get-bon.component.css'
})
export class GetBonComponent {
  displayedColumns: string[] = [ 'date', 'code_pro','designation', 'qte', 'prix', 'total'];
  dataSource = new MatTableDataSource<Entre>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dataService: EntreService ) {}
  
  ngOnInit() {
    this.dataService.getEntre().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
