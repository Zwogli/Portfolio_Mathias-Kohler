import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screen-imprint',
  templateUrl: './screen-imprint.component.html',
  styleUrls: ['./screen-imprint.component.scss']
})
export class ScreenImprintComponent {

  constructor(private route: ActivatedRoute){}
}
