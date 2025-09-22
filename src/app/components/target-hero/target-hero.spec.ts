import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetHero } from './target-hero';

describe('TargetHero', () => {
  let component: TargetHero;
  let fixture: ComponentFixture<TargetHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
