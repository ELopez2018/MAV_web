import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPracticeComponent } from './card-practice.component';

describe('CardPracticeComponent', () => {
  let component: CardPracticeComponent;
  let fixture: ComponentFixture<CardPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
