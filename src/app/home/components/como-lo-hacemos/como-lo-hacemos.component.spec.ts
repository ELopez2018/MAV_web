import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoLoHacemosComponent } from './como-lo-hacemos.component';

describe('ComoLoHacemosComponent', () => {
  let component: ComoLoHacemosComponent;
  let fixture: ComponentFixture<ComoLoHacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoLoHacemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoLoHacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
