import { Component } from '@angular/core';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss'],
})
export class SectionSkillsComponent {
  skills = [
    {
      name: 'Angular',
      img: 'assets/icons_mobile/Angular.png',
    },
    {
      name: 'Rest-Api',
      img: 'assets/icons_mobile/Api.png',
    },
    {
      name: 'CSS',
      img: 'assets/icons_mobile/css.png',
    },
    {
      name: 'Firebase',
      img: 'assets/icons_mobile/Firebase.png',
    },
    {
      name: 'GIT',
      img: 'assets/icons_mobile/Git.png',
    },
    {
      name: 'HTML',
      img: 'assets/icons_mobile/html.png',
    },
    {
      name: 'JavaScript',
      img: 'assets/icons_mobile/JavScript.png',
    },
    {
      name: 'Material design',
      img: 'assets/icons_mobile/materialDesign.png',
    },
    {
      name: 'Scrum',
      img: 'assets/icons_mobile/Scrum.png',
    },
    {
      name: 'Typescript',
      img: 'assets/icons_mobile/Typescript.png',
    },
    {
      name: 'Wordpress',
      img: 'assets/icons_mobile/WordPress.png',
    },
  ];
}
