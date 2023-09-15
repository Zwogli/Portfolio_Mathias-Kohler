import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { ScreenPortfolioComponent } from './screen-portfolio/screen-portfolio.component';

const routes: Routes = [
  { path: '', component: ScreenPortfolioComponent },
  { path: 'imprint', component: ImprintComponent } // /:id = url verfügt über eine Variable 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
