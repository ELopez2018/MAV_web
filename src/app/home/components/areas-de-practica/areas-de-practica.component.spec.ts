import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasDePracticaComponent } from './areas-de-practica.component';

describe('AreasDePracticaComponent', () => {
  let component: AreasDePracticaComponent;
  let fixture: ComponentFixture<AreasDePracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasDePracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasDePracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
