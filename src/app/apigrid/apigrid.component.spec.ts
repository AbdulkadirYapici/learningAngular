import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApigridComponent } from './apigrid.component';

describe('ApigridComponent', () => {
  let component: ApigridComponent;
  let fixture: ComponentFixture<ApigridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApigridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApigridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
