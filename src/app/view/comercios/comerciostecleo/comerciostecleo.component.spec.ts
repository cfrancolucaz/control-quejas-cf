import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerciostecleoComponent } from './comerciostecleo.component';

describe('ComerciostecleoComponent', () => {
  let component: ComerciostecleoComponent;
  let fixture: ComponentFixture<ComerciostecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComerciostecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComerciostecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
