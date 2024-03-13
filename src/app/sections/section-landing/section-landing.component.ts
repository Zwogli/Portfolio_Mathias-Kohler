import { Component } from '@angular/core';

@Component({
  selector: 'app-section-landing',
  templateUrl: './section-landing.component.html',
  styleUrls: ['./section-landing.component.scss']
})
export class SectionLandingComponent {

  location(path){
    if(path === '#section-contact'){
      window.location.href = path;
    }else(
      window.open(path, '_blank')
    )
  }
}
