
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Keyboard, { SimpleKeyboard } from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { CheckboxModule } from 'primeng/checkbox';
import { AccesService } from '../../@services/acces.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { KeyboardComponent } from '../../keyboard/keyboard.component';
import { DeletComponent } from '../delet/delet.component';
import { GetAccesComponent } from '../get-acces/get-acces.component';

@Component({

  selector: 'app-acces',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule,ReactiveFormsModule,CheckboxModule,NgFor,HttpClientModule,KeyboardComponent],
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css'] // Update the path to the correct CSS file
})

export class AccesComponent implements OnInit{
  keyboardVisible : boolean = false;
  clicker=false;
  caissier="";
  password="";
  encaissement = false;
  rapport = false;
  raz = false;
  rap_period = false;
  configuration = false;
  annul_art = false;
  annul_tick = false;
  prelevement = false;
  liste_tick = false;
  remise = false;
  pay_offre = false;
  sc = false;
  admin:boolean=false;
  caissierr:boolean=false;
  libre:boolean=false;
  occupe:boolean=false;
  
  

constructor(public dialog: MatDialog, private acces: AccesService) { } 

ngOnInit() : void{
}



newData = {
  caissier: this.caissier,
  password: this.password,
  encaissement: this.encaissement,
  rapport: this.rapport,
  raz: this.raz,
  rap_period: this.rap_period,
  configuration: this.configuration,
  annul_art: this.annul_art,
  annul_tick: this.annul_tick,
  prelevement: this.prelevement,
  liste_tick: this.liste_tick,
  remise: this.remise,
  pay_offre: this.pay_offre,
  sc: this.sc,
  admin: this.admin,
  caissierr: this.caissierr,
  libre: this.libre,
  occupe: this.occupe,
};

create(){
  this.acces.create(this.newData).subscribe({
   next : (response) => {
    console.log('data created', response);
    Swal.fire({
      title: 'Data saved successfully',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  },
  error: (error) => {
    console.error('Error creating data:', error.error.message);
    Swal.fire({
      title: 'Error',
      text: error.error.message,
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    });
  }
});
}
checked : boolean = false;
selectAll(event: Event): void{
  const checked = (event.target as HTMLInputElement).checked;
  this.newData.encaissement = this.newData.rapport = this.newData.raz = this.newData.rap_period= this.newData.configuration=this.newData.annul_art=this.newData.annul_tick =this.newData.prelevement= this.newData.liste_tick=this.newData.remise= this.newData.pay_offre = this.newData.sc = checked;
console.log(this.encaissement, "this.encaissement");
}



openDialog() {
  this.dialog.open(DeletComponent);
  
}
openDialog1() {
  this.dialog.open(GetAccesComponent);
  
}
}