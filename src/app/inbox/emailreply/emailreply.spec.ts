import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailreply } from './emailreply';

describe('Emailreply', () => {
  let component: Emailreply;
  let fixture: ComponentFixture<Emailreply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emailreply],
    }).compileComponents();

    fixture = TestBed.createComponent(Emailreply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
