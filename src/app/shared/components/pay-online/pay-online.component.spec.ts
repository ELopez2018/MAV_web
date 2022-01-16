import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOnlineComponent } from './pay-online.component';

describe('PayOnlineComponent', () => {
  let component: PayOnlineComponent;
  let fixture: ComponentFixture<PayOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
