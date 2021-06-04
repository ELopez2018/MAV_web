import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('footerContainer', { static: true })
  footerContainer!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.iniAnimation();
  }
  iniAnimation() {
    gsap.from(this.footerContainer.nativeElement, {
      delay: 2,
      duration: 0.9,
      opacity: 0,
      y: 200,
      zIndex:1
    });
  }
}
