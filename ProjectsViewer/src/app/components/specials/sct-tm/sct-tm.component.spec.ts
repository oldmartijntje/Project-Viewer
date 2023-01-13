import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCTTMComponent } from './sct-tm.component';

describe('SCTTMComponent', () => {
  let component: SCTTMComponent;
  let fixture: ComponentFixture<SCTTMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCTTMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCTTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
