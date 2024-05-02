import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { KeyboardComponent } from '../../../keyboard/keyboard.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgIf,CheckboxModule,SelectButtonModule,FormsModule,ReactiveFormsModule,KeyboardComponent, HttpClientModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  
  clicker: boolean = false;
  articleForm: FormGroup = new FormGroup({});
  code_pro: number | undefined;
  designation: any;
  group: any;
  sous_group: any;
  sous_famille: any;
  prix_vente: any;
  prix_vente_1: any;
  commentaire: any;
  tva: any;
  imprimenter: any;
  prix_libre: any;
  cont_dec_auto: any;
  prix_0_auto: any;
  fidelite: any;
  validation: any;
  stock: any;
  personnel_auto: any;
  article_gratuit: any;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }
  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      codeProduit: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      options: new FormControl('', Validators.required)
    });
  }
  

  onSubmit() { 
  
      Swal.fire({
        icon: 'success',
        title: 'Enregistré avec succès',
        showConfirmButton: false,
        timer: 2000      });
  }
  onclick(){
     this.clicker =! this.clicker;
  }
  openDialog() {
    this.dialog.open(KeyboardComponent);
  }
  http=inject(HttpClient);
  submit(){
    this.http.post('http://localhost:7000/api/article',{
      code_pro:this.code_pro,
      designation:this.designation,
      group:this.group,
      sous_group:this.sous_group,
      famille:this.sous_famille,
      prix_vente:this.prix_vente,
      prix_vente_1:this.prix_vente_1,
      commentaire:this.commentaire,
      tva:this.tva,
      imprimenter:this.imprimenter,
      prix_libre:this.prix_libre,
      cont_dec_auto:this.cont_dec_auto,
      prix_0_auto:this.prix_0_auto,
      fidelite:this.fidelite,
      validation:this.validation,
      stock:this.stock,
      personnel_auto:this.personnel_auto,
      article_gratuit:this.article_gratuit,

      
    }).subscribe((result)=>{
    })

  }
}
