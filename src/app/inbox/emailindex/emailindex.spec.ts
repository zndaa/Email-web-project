import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailindex } from './emailindex';

describe('Emailindex', () => {
  let component: Emailindex;
  let fixture: ComponentFixture<Emailindex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emailindex],
    }).compileComponents();

    fixture = TestBed.createComponent(Emailindex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
