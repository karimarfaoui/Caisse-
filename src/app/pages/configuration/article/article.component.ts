import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Component, OnInit, inject } from '@angular/core';

import Swal from 'sweetalert2';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { KeyboardComponent } from '../../../keyboard/keyboard.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from '../../../@services/articles.service';
import { GetArticleComponent } from '../../get-article/get-article.component';
import { DeletArticleComponent } from '../../delet-article/delet-article.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgIf,CommonModule,CheckboxModule,SelectButtonModule,FormsModule,ReactiveFormsModule,KeyboardComponent, HttpClientModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  
  clicker = false;
  
  code_pro = "";
  designiation= "";
  group="";
  sous_group="";
  famille="";
  sous_famille="";
  prix_vente="";
  prix_vente_1="";
  commentaire="";
  tva=0.0;
  imprimenter=false;
  prix_libre =0.0;
  cont_dec_auto=false;
  prix_0_auto=false;
  fidelite=false;
  validation=false;
  stock=false;
  personnel_auto=false;
  article_gratuit=false;

  constructor(public dialog: MatDialog, private article: ArticlesService) { } // No need for @Inject here, normal DI is sufficient

  ngOnInit() : void{
  }
  
  
  newData = {
    code_pro: this.code_pro,
    designiation: this.designiation, 
    group: this.group,
    sous_group: this.sous_group,
    famille: this.famille,
    sous_famille: this.sous_famille,
    prix_vente: this.prix_vente,
    prix_vente_1: this.prix_vente_1,
    commentaire :this.commentaire,
    tva: this.tva,
    imprimenter: this.imprimenter,
    prix_libre: this.prix_libre,
    cont_dec_auto:  this.cont_dec_auto,
    prix_0_auto: this.prix_0_auto,
    fidelite: this.fidelite,
    validation: this.validation,
    stock: this.stock,
    personnel_auto: this.personnel_auto,
    article_gratuit:  this.article_gratuit
  };

  create() { 
    this.article.create(this.newData).subscribe({
      next: (response) => {
        console.log('Data created successfully:', response);
      Swal.fire({
        icon: 'success',
        title: 'Enregistré avec succès',
        showConfirmButton: false,
        timer: 2000      });
  },
  error: (error) => {
    console.error('Error creating data:', error);
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: 'Erreur lors de l\'enregistrement',
      showConfirmButton: false,
      timer: 2000
    });
  }
});
}
find(code_pro : number) {
  this.article.find(this.code_pro).subscribe({
    next: (response) => {
this.newData = response; 
    }
  });
}
update() {
  this.article.updateData(this.code_pro, this.newData).subscribe({
    next: (response) => {
      console.log( response);
      console.log('Article updated successfully:', response);
      Swal.fire({
        icon: 'success',
        title: 'Updated successfully',
        showConfirmButton: false,
        timer: 2000
      });
    },
    error: (error) => {
      console.error('Error updating article:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error during update',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
}
  





  onclick(){
     this.clicker =! this.clicker;
  }
  openDialog() {
    this.dialog.open(KeyboardComponent);
  }
  openDialog1() {
    this.dialog.open(GetArticleComponent);
    
  }
  openDialog2() {
    this.dialog.open(DeletArticleComponent);
  }
  
}
