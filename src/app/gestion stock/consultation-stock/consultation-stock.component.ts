import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticlesService } from '../../@services/articles.service';
import { Article } from '../../models/article.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-consultation-stock',
  standalone: true,
  imports: [ HttpClientModule, MatTableModule,  MatPaginator, MatSort, NgFor, CommonModule],
  templateUrl: './consultation-stock.component.html',
  styleUrl: './consultation-stock.component.css'
})
export class ConsultationStockComponent {
  displayedColumns: string[] = [ 'code_pro', 'designiation','prix_vente','entre','sortie','Stock'];
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
