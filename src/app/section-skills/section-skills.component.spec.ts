import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkillsComponent } from './section-skills.component';

describe('SectionSkillsComponent', () => {
  let component: SectionSkillsComponent;
  let fixture: ComponentFixture<SectionSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSkillsComponent]
    });
    fixture = TestBed.createComponent(SectionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
