import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJSResearchComponent } from './rxjs-research.component';

describe('RXJSResearchComponent', () => {
  let component: RXJSResearchComponent;
  let fixture: ComponentFixture<RXJSResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RXJSResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RXJSResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
