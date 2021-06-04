import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatnersComponent } from './card-patners.component';

describe('CardPatnersComponent', () => {
  let component: CardPatnersComponent;
  let fixture: ComponentFixture<CardPatnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPatnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPatnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
