import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SortieService } from '../../@services/sortie.service';
import Swal from 'sweetalert2';
import { Sortie } from '../../models/sortie.model';
import { FormsModule } from '@angular/forms';
import { ArticlesService } from '../../@services/articles.service';


@Component({
  selector: 'app-bon-sortie',
  standalone: true,
  imports: [ HttpClientModule,FormsModule],
  templateUrl: './bon-sortie.component.html',
  styleUrl: './bon-sortie.component.css'
})
export class BonSortieComponent {
  Sortie: Sortie = {
      
      date: new Date(),
      code_pro: '',
      designation: '',
      qte: 0,
      prix: 0,
      total: 0
    };
    
    constructor(private sortie : SortieService , private article : ArticlesService) { }
    ngOnInit() {
    }

    addSortie() {
      this.sortie.addSortie(this.Sortie).subscribe(data => {
        Swal.fire('Bon de sortie ajouté avec succès');
      }, error => {
        Swal.fire('Erreur lors de l\'ajout du bon de sortie');
      });
    }

   
    
}
