
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Keyboard, { SimpleKeyboard } from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { CheckboxModule } from 'primeng/checkbox';


@Component({

  selector: 'app-acces',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule,ReactiveFormsModule,CheckboxModule,NgFor],
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css'] // Update the path to the correct CSS file
})

export class AccesComponent implements OnInit{
  keyboardVisible : boolean = false;
  logIn: boolean = false;
  selectAll :boolean=false;
  checkboxes1 =[
    {title: 'Encaissement', selected:false},
    {title: 'Rapport', selected:false},
    {title: 'Remise à Zéro', selected:false},
    {title: 'Rapport Périodique', selected:false},
    {title: 'Configuration', selected:false},
    {title: 'Annulation Article', selected:false},
    {title: 'Annulation Ticket', selected:false},
  ];
  checkboxes2 =[
    {title: 'Note', selected:false},
    {title: 'Séparation Note', selected:false},
    {title: 'Prélevement', selected:false},
    {title: 'Liste Ticket', selected:false},
    {title: 'Remise', selected:false},
    {title: 'Payement Offre', selected:false},
    {title: 'Sortie De Caisse', selected:false},

  ];

  
  
 


showKeyboard() {
  this.keyboardVisible = !this.keyboardVisible; 
  console.log(this.keyboardVisible);
}
  
  keyboard: Keyboard = {} as Keyboard;
  inputValue: string = '';

  ngOnInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onChange(input: string) {
    this.inputValue = input;
    console.log("Input changed", input);
  }

  onKeyPress(button: string) {
    this.inputValue = button;
    this.inputValue.slice(0, -1);
    if(this.inputValue === '{bksp}'){
      this.inputValue='';
    }
  }
  areItemsVisible :boolean = false;
  authentification() {
    this.areItemsVisible = !this.areItemsVisible;
    console.log(this.areItemsVisible);
  }
  toggleSelectAll(){
    this.checkboxes1.forEach((c) => (c.selected = this.selectAll));
    this.checkboxes2.forEach((c) => (c.selected = this.selectAll));


  }
  checkboxChanged(){
    if(this.isAllCheckboxesSelected()) this.selectAll=true;
    if(this.isAllCheckboxesSelected()) this.selectAll = false;
  }
  isAllCheckboxesSelected(){
    return this.checkboxes1.every((c)=>c.selected) && this.checkboxes2.every((c)=>c.selected);
  }
  
 
  
  
 

}
