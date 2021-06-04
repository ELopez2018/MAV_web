import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import  { gsap }  from 'gsap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @ViewChild('container',{static: true}) container!: ElementRef<HTMLDivElement>;
  @ViewChild('mainContainer',{static: true}) mainContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('row',{static: true}) row!: ElementRef<HTMLDivElement>;
  @ViewChild('menu',{static: true}) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('logo',{static: true}) logo!: ElementRef<HTMLDivElement>;
  constructor() { }

  ngOnInit(): void {
    this.iniAnimation();
  }

  iniAnimation() {
    gsap.from(this.container.nativeElement, {
      delay: 0.2,
      duration: 0.4,
      opacity: 0,
      y: -20
    });
    gsap.from(this.mainContainer.nativeElement, {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
    gsap.from(this.menu.nativeElement, {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
    gsap.from(this.menu.nativeElement.childNodes, {
      delay: 0.8,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
    gsap.from(this.logo.nativeElement, {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
  }
}
