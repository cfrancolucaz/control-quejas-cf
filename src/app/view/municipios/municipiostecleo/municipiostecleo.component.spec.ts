import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiostecleoComponent } from './municipiostecleo.component';

describe('MunicipiostecleoComponent', () => {
  let component: MunicipiostecleoComponent;
  let fixture: ComponentFixture<MunicipiostecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipiostecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipiostecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
