import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiasesorvialComponent } from './miasesorvial.component';

describe('MiasesorvialComponent', () => {
  let component: MiasesorvialComponent;
  let fixture: ComponentFixture<MiasesorvialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiasesorvialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiasesorvialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
