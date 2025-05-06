import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSheetChild2Component } from './cheat-sheet-child2.component';

describe('CheatSheetChild2Component', () => {
  let component: CheatSheetChild2Component;
  let fixture: ComponentFixture<CheatSheetChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatSheetChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatSheetChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
