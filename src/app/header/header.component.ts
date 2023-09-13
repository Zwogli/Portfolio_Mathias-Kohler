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

  // ngOnInit(){
  //   window.addEventListener("resize", this.checkWindowSize);
  // }

  // checkWindowSize() {
  //   if(window.innerWidth >= 850 && !this.checkWidthDesktop){
  //     this.checkWidthDesktop = true;
  //     this.menuToggle('desktop');
  //   }else if(window.innerWidth < 850 && this.checkWidthDesktop){
  //     this.checkWidthDesktop = false;
  //     this.menuToggle('mobile');
  //   }
  // }

  // menuToggle(device:string){
  //   let menu = document.getElementById('drop-down-menu');
  //   if(device === 'mobile'){
  //     menu.classList.toggle('transform');
  //   }else  
  //   if(device === 'desktop'){
  //     menu.classList.remove('transform');
  //   }  
  // }

 
}