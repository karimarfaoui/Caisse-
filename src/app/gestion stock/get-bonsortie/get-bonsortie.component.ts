import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SortieService } from '../../@services/sortie.service';
import { Sortie } from '../../models/sortie.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-get-bonsortie',
  standalone: true,
  imports: [ HttpClientModule, MatTableModule,  MatPaginator, MatSort, NgFor, CommonModule],
  templateUrl: './get-bonsortie.component.html',
  styleUrl: './get-bonsortie.component.css'
})
export class GetBonsortieComponent implements OnInit {
  displayedColumns: string[] = [ 'date', 'code_pro','designation', 'qte', 'prix', 'total'];
dataSource = new MatTableDataSource<Sortie>();

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(private dataService: SortieService ) {}

ngOnInit() {
  this.dataService.getSortie().subscribe(data => {
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

}
