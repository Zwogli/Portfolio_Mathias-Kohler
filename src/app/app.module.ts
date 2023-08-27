import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionLandingComponent } from './section-landing/section-landing.component';
import { SectionAboutMeComponent } from './section-about-me/section-about-me.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionLandingComponent,
    SectionAboutMeComponent,
    SectionSkillsComponent,
    SectionContactComponent,
    FooterComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
