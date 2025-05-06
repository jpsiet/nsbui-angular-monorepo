import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSheetChild1Component } from './cheat-sheet-child1.component';

describe('CheatSheetChild1Component', () => {
  let component: CheatSheetChild1Component;
  let fixture: ComponentFixture<CheatSheetChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatSheetChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatSheetChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
