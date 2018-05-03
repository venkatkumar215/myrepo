import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavHeaderComponent } from './leftnav-header.component';

describe('LeftnavHeaderComponent', () => {
  let component: LeftnavHeaderComponent;
  let fixture: ComponentFixture<LeftnavHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
