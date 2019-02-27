import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsmComponent } from './rsm.component';

describe('RsmComponent', () => {
  let component: RsmComponent;
  let fixture: ComponentFixture<RsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
