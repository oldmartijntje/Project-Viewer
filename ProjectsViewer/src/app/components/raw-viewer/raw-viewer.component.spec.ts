import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawViewerComponent } from './raw-viewer.component';

describe('RawViewerComponent', () => {
  let component: RawViewerComponent;
  let fixture: ComponentFixture<RawViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
