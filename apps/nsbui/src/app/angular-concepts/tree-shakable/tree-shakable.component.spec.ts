import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeShakableComponent } from './tree-shakable.component';

describe('TreeShakableComponent', () => {
  let component: TreeShakableComponent;
  let fixture: ComponentFixture<TreeShakableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeShakableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeShakableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
