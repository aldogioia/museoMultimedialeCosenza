import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSection } from './school-section';

describe('SchoolSection', () => {
  let component: SchoolSection;
  let fixture: ComponentFixture<SchoolSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
