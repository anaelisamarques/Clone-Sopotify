import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
navagation: boolean = false;
barsIcon = faBars;
nav(){
  if(this.navagation){
    this.navagation = false;
  }else{
    this.navagation = true;
  }
}
  
}
