import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemctlComponent } from './systemctl.component';

describe('SystemctlComponent', () => {
  let component: SystemctlComponent;
  let fixture: ComponentFixture<SystemctlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemctlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemctlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
