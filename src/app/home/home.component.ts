import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
more_bandeiras: boolean = false 

mais_bandeiras(){
  this.more_bandeiras = true;
}

menos_bandeiras(){
  this.more_bandeiras = false;
}
}

