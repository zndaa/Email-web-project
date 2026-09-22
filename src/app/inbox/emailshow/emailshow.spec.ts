import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailshow } from './emailshow';

describe('Emailshow', () => {
  let component: Emailshow;
  let fixture: ComponentFixture<Emailshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emailshow],
    }).compileComponents();

    fixture = TestBed.createComponent(Emailshow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
