import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDabubbleComponent } from './project-dabubble.component';

describe('ProjectDabubbleComponent', () => {
  let component: ProjectDabubbleComponent;
  let fixture: ComponentFixture<ProjectDabubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDabubbleComponent]
    });
    fixture = TestBed.createComponent(ProjectDabubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
