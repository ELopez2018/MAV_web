import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardValorCorporativoComponent } from './card-valor-corporativo.component';

describe('CardValorCorporativoComponent', () => {
  let component: CardValorCorporativoComponent;
  let fixture: ComponentFixture<CardValorCorporativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardValorCorporativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardValorCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
