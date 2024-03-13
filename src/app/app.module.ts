import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionLandingComponent } from './sections/section-landing/section-landing.component';
import { SectionAboutMeComponent } from './sections/section-about-me/section-about-me.component';
import { SectionSkillsComponent } from './sections/section-skills/section-skills.component';
import { SectionContactComponent } from './sections/section-contact/section-contact.component';
import { FooterComponent } from './footer/footer.component';
import { SectionPortfolioComponent } from './sections/section-portfolio/section-portfolio.component';
import { ProjectElPolloLocoComponent } from './projects/project-el-pollo-loco/project-el-pollo-loco.component';
import { ProjectJoinComponent } from './projects/project-join/project-join.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenPortfolioComponent } from './screen-portfolio/screen-portfolio.component';
import { ScreenImprintComponent } from './screen-imprint/screen-imprint.component';
import { ProjectPokedexComponent } from './projects/project-pokedex/project-pokedex.component';
import { ProjectDabubbleComponent } from './projects/project-dabubble/project-dabubble.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionLandingComponent,
    SectionAboutMeComponent,
    SectionSkillsComponent,
    SectionContactComponent,
    FooterComponent,
    SectionPortfolioComponent,
    ProjectElPolloLocoComponent,
    ProjectJoinComponent,
    ScreenPortfolioComponent,
    ScreenImprintComponent,
    ProjectPokedexComponent,
    ProjectDabubbleComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
