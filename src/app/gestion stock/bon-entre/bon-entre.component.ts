import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EntreService } from '../../@services/entre.service';
import Swal from 'sweetalert2';
import { Entre } from '../../models/entre.model';
import { FormsModule } from '@angular/forms';
import { ArticlesService } from '../../@services/articles.service';

@Component({
  selector: 'app-bon-entre',
  standalone: true,
  imports: [ HttpClientModule,FormsModule],
  templateUrl: './bon-entre.component.html',
  styleUrl: './bon-entre.component.css'
})
export class BonEntreComponent {
  Entre: Entre = {
    
    date: new Date(),
    code_pro: '',
    designation: '',
    qte: 0,
    prix: 0,
    total: 0
  };
 
  constructor(private entre : EntreService ) { }
  ngOnInit() {
  }

 addEntre() {
   this.entre.addEntre(this.Entre).subscribe(data => {
     Swal.fire('Bon d\'entrée ajouté avec succès');
   }, error => {
     Swal.fire('Erreur lors de l\'ajout du bon d\'entrée');
   });
 }
  
 
 
  
}
