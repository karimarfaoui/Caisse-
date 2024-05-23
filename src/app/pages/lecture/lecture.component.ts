import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Keyboard, { SimpleKeyboard } from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { CheckboxModule } from 'primeng/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { RapportParHeureComponent } from '../../lecture/rapport-par-heure/rapport-par-heure.component';

@Component({
  selector: 'app-lecture',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {
  keyboardVisible : boolean = false;
  logIn: boolean = false;
showKeyboard() {
  this.keyboardVisible = !this.keyboardVisible; 
  console.log(this.keyboardVisible);
}
  
  keyboard: Keyboard = {} as Keyboard;
  inputValue: string = '';
  constructor(public dialog: MatDialog) { } 
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

  openDialog() {
    this.dialog.open(RapportParHeureComponent);
  }


}
