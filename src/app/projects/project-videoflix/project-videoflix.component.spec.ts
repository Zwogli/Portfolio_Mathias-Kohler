import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVideoflixComponent } from './project-videoflix.component';

describe('ProjectVideoflixComponent', () => {
  let component: ProjectVideoflixComponent;
  let fixture: ComponentFixture<ProjectVideoflixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectVideoflixComponent]
    });
    fixture = TestBed.createComponent(ProjectVideoflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
