import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectElPolloLocoComponent } from './project-el-pollo-loco.component';

describe('ProjectElPolloLocoComponent', () => {
  let component: ProjectElPolloLocoComponent;
  let fixture: ComponentFixture<ProjectElPolloLocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectElPolloLocoComponent]
    });
    fixture = TestBed.createComponent(ProjectElPolloLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
