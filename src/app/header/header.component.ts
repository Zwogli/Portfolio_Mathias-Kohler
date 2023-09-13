import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  checkWidthDesktop:boolean;

  menuToggle(){
    let menu = document.getElementById('drop-down-menu');
    let hamburgerbar = document.getElementById('hamburgerbar');
    let body = document.getElementById('body');
    
    menu.classList.toggle('transform');
    hamburgerbar.classList.toggle('transform--x');
    body.classList.toggle('stopScrollY');
}
}