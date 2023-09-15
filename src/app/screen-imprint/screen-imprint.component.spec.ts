import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenImprintComponent } from './screen-imprint.component';

describe('ScreenImprintComponent', () => {
  let component: ScreenImprintComponent;
  let fixture: ComponentFixture<ScreenImprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenImprintComponent]
    });
    fixture = TestBed.createComponent(ScreenImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
