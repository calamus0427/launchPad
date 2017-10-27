import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBgComponent } from './canvas-bg.component';

describe('CanvasBgComponent', () => {
  let component: CanvasBgComponent;
  let fixture: ComponentFixture<CanvasBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
