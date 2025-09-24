import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactame } from './contactame';

describe('Contactame', () => {
  let component: Contactame;
  let fixture: ComponentFixture<Contactame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
