import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailcreate } from './emailcreate';

describe('Emailcreate', () => {
  let component: Emailcreate;
  let fixture: ComponentFixture<Emailcreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emailcreate],
    }).compileComponents();

    fixture = TestBed.createComponent(Emailcreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
