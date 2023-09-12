import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  location(path){
    if(path === '#section-contact'){
      window.location.href = path;
    }else(
      window.open(path, '_blank')
    )
  }
}
