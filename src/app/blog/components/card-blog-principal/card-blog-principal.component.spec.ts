import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlogPrincipalComponent } from './card-blog-principal.component';

describe('CardBlogPrincipalComponent', () => {
  let component: CardBlogPrincipalComponent;
  let fixture: ComponentFixture<CardBlogPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBlogPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBlogPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
