

import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Keyboard, { SimpleKeyboard } from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';


@Component({

  selector: 'app-commentaire',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule,ReactiveFormsModule
  ],
  templateUrl: './Commentaire.component.html',
  styleUrls: ['./Commentaire.component.css'] // Update the path to the correct CSS file
})

export class CommentaireComponent implements OnInit{
  keyboardVisible : boolean = false;
  logIn: boolean = false;
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
  
 

}