import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajamosParaNuestrosUsuariosComponent } from './trabajamos-para-nuestros-usuarios.component';

describe('TrabajamosParaNuestrosUsuariosComponent', () => {
  let component: TrabajamosParaNuestrosUsuariosComponent;
  let fixture: ComponentFixture<TrabajamosParaNuestrosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajamosParaNuestrosUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajamosParaNuestrosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
