import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailform } from './emailform';

describe('Emailform', () => {
  let component: Emailform;
  let fixture: ComponentFixture<Emailform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emailform],
    }).compileComponents();

    fixture = TestBed.createComponent(Emailform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
