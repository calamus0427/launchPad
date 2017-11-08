import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoductComponent } from './peoduct.component';

describe('PeoductComponent', () => {
  let component: PeoductComponent;
  let fixture: ComponentFixture<PeoductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
