import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalestecleoComponent } from './sucursalestecleo.component';

describe('SucursalestecleoComponent', () => {
  let component: SucursalestecleoComponent;
  let fixture: ComponentFixture<SucursalestecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalestecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalestecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
