import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiResearchChildComponent } from './di-research-child.component';

describe('DiResearchChildComponent', () => {
  let component: DiResearchChildComponent;
  let fixture: ComponentFixture<DiResearchChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiResearchChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiResearchChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
