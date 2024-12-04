import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { Skills } from 'src/js/skills'

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss'],
})
export class SectionSkillsComponent {
  skills: Skill[] = Skills;

  location(path) {
    window.location.href = path;
  }
}
