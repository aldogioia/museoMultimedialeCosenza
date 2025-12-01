import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSection } from './coming-section';

describe('ComingSection', () => {
  let component: ComingSection;
  let fixture: ComponentFixture<ComingSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComingSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComingSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
