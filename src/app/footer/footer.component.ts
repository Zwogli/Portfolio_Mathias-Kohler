import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router){}

  location(path){
    if(path === '#section-contact'){
      window.location.href = path;
    }else(
      window.open(path, '_blank')
    )
  }

  navigate(){
    this.router.navigateByUrl('/imprint'); // Url = /game/id
  }
}
