import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from '../../@services/articles.service';
@Component({
  selector: 'app-delet-article',
  standalone: true,
  imports: [NgIf,FormsModule,HttpClientModule],
  templateUrl: './delet-article.component.html',
  styleUrl: './delet-article.component.css'
})
export class DeletArticleComponent {
  code_pro = "" ;

  constructor(private article: ArticlesService) { }  
  
  ngOnInit(): void {
    
  }
  
  
  delete(code_pro : number){
    this.article.delete(this.code_pro).subscribe(posts =>{
      console.log(posts);
    });
  }
  
  
  showed:boolean = false;
  showedinput(){
  
    this.showed = !this.showed;
  }
  submit(){
    this.delete(Number(this.code_pro));
  
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Paiement ajouté avec succès',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
