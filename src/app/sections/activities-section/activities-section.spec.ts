import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSection } from './activities-section';

describe('ActivitiesSection', () => {
  let component: ActivitiesSection;
  let fixture: ComponentFixture<ActivitiesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
