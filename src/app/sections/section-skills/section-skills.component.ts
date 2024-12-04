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
      img: 'assets/icons/Angular.png',
    },
    {
      name: 'Angular',
      img: `assets/icons/svg/Angular.svg`,
    },
    {
      name: 'Rest-Api',
      img: 'assets/icons/Api.png',
    },
    {
      name: 'CSS',
      img: 'assets/icons/css.png',
    },
    {
      name: 'Firebase',
      img: 'assets/icons/Firebase.png',
    },
    {
      name: 'GIT',
      img: 'assets/icons/Git.png',
    },
    {
      name: 'HTML',
      img: 'assets/icons/html.png',
    },
    {
      name: 'JavaScript',
      img: 'assets/icons/JavScript.png',
    },
    {
      name: 'Material design',
      img: 'assets/icons/materialDesign.png',
    },
    {
      name: 'Scrum',
      img: 'assets/icons/Scrum.png',
    },
    {
      name: 'Typescript',
      img: 'assets/icons/Typescript.png',
    },
    {
      name: 'Wordpress',
      img: 'assets/icons/WordPress.png',
    },
  ];

  location(path) {
    window.location.href = path;
  }
}
