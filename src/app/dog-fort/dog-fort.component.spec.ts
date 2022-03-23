/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DogFortComponent } from './dog-fort.component';

describe('DogFortComponent', () => {
  let component: DogFortComponent;
  let fixture: ComponentFixture<DogFortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogFortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
