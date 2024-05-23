import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccesService } from '../../@services/acces.service';
@Component({
  selector: 'app-delet',
  standalone: true,
  imports: [NgIf,FormsModule,HttpClientModule],
  templateUrl: './delet.component.html',
  styleUrl: './delet.component.css'
})
export class DeletComponent implements OnInit{
  id = "" ;

constructor(private acces: AccesService) { }  

ngOnInit(): void {
  
}


delete(id : number){
  this.acces.delete(id).subscribe(posts =>{
    console.log(posts);
  });
}


showed:boolean = false;
showedinput(){

  this.showed = !this.showed;
}
submit(){
  this.delete(Number(this.id));

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Paiement ajouté avec succès',
    showConfirmButton: false,
    timer: 1500
  });
}




}
