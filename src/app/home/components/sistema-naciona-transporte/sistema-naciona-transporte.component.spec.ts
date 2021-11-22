import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaNacionaTransporteComponent } from './sistema-naciona-transporte.component';

describe('SistemaNacionaTransporteComponent', () => {
  let component: SistemaNacionaTransporteComponent;
  let fixture: ComponentFixture<SistemaNacionaTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaNacionaTransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaNacionaTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
