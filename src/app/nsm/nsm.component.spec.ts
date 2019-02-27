import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsmComponent } from './nsm.component';

describe('NsmComponent', () => {
  let component: NsmComponent;
  let fixture: ComponentFixture<NsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
