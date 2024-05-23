import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticlesService } from '../../@services/articles.service';
import { Article } from '../../models/article.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-rapport-par-heure',
  standalone: true,
  imports: [ HttpClientModule, MatTableModule,  MatPaginator, MatSort, NgFor, CommonModule],
  templateUrl: './rapport-par-heure.component.html',
  styleUrl: './rapport-par-heure.component.css'
})
export class RapportParHeureComponent implements OnInit {
  displayedColumns: string[] = ['createdAt', 'montant','nombre de client'];
  dataSource = new MatTableDataSource<Article>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: ArticlesService ) {}

  ngOnInit() {
    this.dataService.fetchArticle().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
