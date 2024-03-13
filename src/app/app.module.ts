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
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { ProjectElPolloLocoComponent } from './project-el-pollo-loco/project-el-pollo-loco.component';
import { ProjectJoinComponent } from './project-join/project-join.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenPortfolioComponent } from './screen-portfolio/screen-portfolio.component';
import { ScreenImprintComponent } from './screen-imprint/screen-imprint.component';
import { ProjectPokedexComponent } from './project-pokedex/project-pokedex.component';
import { ProjectDabubbleComponent } from './project-dabubble/project-dabubble.component';

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
