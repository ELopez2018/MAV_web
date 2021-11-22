import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentanosComponent } from './cuentanos.component';

describe('CuentanosComponent', () => {
  let component: CuentanosComponent;
  let fixture: ComponentFixture<CuentanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
