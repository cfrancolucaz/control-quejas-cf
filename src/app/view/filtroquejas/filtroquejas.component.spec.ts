import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroquejasComponent } from './filtroquejas.component';

describe('FiltroquejasComponent', () => {
  let component: FiltroquejasComponent;
  let fixture: ComponentFixture<FiltroquejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroquejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroquejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
