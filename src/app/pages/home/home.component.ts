import { Acces } from './../../models/acces.model';
import { AccesService } from './../../@services/acces.service';

import { CommonModule, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Keyboard, { SimpleKeyboard } from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import Swal from 'sweetalert2';
import { RefreshService } from '../../@services/refresh.service';



@Component({

  selector: 'app-home',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule,ReactiveFormsModule,RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Update the path to the correct CSS file
})

export class HomeComponent implements OnInit{
  value = '';
  logIn = false;

  @ViewChild('keyboardRef', { static: true }) keyboardRef: ElementRef | undefined;
  password = ''; 
  keyboard: any;
  LoginService: any;

  
  
  constructor(private acces: AccesService,private refreshService: RefreshService) { }
  ngOnInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      layout: {
        default: ["1 2 3", "4 5 6", "7 8 9", "{shift} 0 _", "{bksp}"],
        show: ["{show } ) +", "{bksp}"

        ]
      },
      theme: "hg-theme-default"
    });
    
  }

  onChange = (input: string) => {
    this.value = input;
    this.password = input;

    console.log("Input changed", input);
  };
  onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

  login(password: number) {
    this.acces.login(password).subscribe(res => {
      console.log('Login successful:', res);
      this.acces.updateUser(res);  // Assuming updateUser is a method you will implement in AccesService
      this.refreshService.requestRefresh();
    }, error => {
      console.error('Login failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your credentials and try again.'
      });
    });
  }
  submit(){
    this.login(Number(this.password));
  
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Paiement ajouté avec succès',
      showConfirmButton: false,
      timer: 1500
    });
  }
  
}

