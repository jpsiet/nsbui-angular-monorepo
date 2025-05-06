import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgprojectasComponent } from './ngprojectas.component';

describe('NgprojectasComponent', () => {
  let component: NgprojectasComponent;
  let fixture: ComponentFixture<NgprojectasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgprojectasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgprojectasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
