import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputt } from './inputt';

describe('Inputt', () => {
  let component: Inputt;
  let fixture: ComponentFixture<Inputt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputt],
    }).compileComponents();

    fixture = TestBed.createComponent(Inputt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
