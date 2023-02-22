import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresCorporativosComponent } from './valores-corporativos.component';

describe('ValoresCorporativosComponent', () => {
  let component: ValoresCorporativosComponent;
  let fixture: ComponentFixture<ValoresCorporativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoresCorporativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresCorporativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
