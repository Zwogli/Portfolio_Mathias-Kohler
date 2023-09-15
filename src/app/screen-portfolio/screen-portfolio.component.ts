import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-screen-portfolio',
  templateUrl: './screen-portfolio.component.html',
  styleUrls: ['./screen-portfolio.component.scss']
})
export class ScreenPortfolioComponent {

  constructor(private router: Router){}

  ngOnInit(){
    AOS.init();
  }
}
