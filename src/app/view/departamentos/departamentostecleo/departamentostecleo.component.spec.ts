import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentostecleoComponent } from './departamentostecleo.component';

describe('DepartamentostecleoComponent', () => {
  let component: DepartamentostecleoComponent;
  let fixture: ComponentFixture<DepartamentostecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentostecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentostecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
