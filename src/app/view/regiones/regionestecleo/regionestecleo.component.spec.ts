import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionestecleoComponent } from './regionestecleo.component';

describe('RegionestecleoComponent', () => {
  let component: RegionestecleoComponent;
  let fixture: ComponentFixture<RegionestecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionestecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionestecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
