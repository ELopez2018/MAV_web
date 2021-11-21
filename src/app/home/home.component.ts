import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { IPracticalAreas } from '@interfaces/practical-areas.interface';
import { PracticalAreasMock } from '@root/core/mocks/practical-area.mocks';
import  { gsap }  from 'gsap';
import { ScrollTrigger } from'gsap/ScrollTrigger';
import { v4 as uuidv4 } from 'uuid';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // SECCION I
  @ViewChild('mainContainerI',{static: true}) mainContainerI!: ElementRef<HTMLDivElement>;
  @ViewChild('rowMain',{static: true}) rowMain!: ElementRef<HTMLDivElement>;
  @ViewChild('col1Sologan1',{static: true}) col1Sologan1!: ElementRef<HTMLDivElement>;
  @ViewChild('mainText1',{static: true}) mainText1!: ElementRef<HTMLDivElement>;
  @ViewChild('mainText2',{static: true}) mainText2!: ElementRef<HTMLDivElement>;
  @ViewChild('mainText3',{static: true}) mainText3!: ElementRef<HTMLDivElement>;
  @ViewChild('mainButton1',{static: true}) mainButton1!: ElementRef<HTMLDivElement>;
  @ViewChild('mainImg1',{static: true}) mainImg1!: ElementRef<HTMLDivElement>;
  @ViewChild('Img1',{static: true}) Img1!: ElementRef<HTMLDivElement>;

  // SECCION II
  @ViewChild('mainContainerII',{static: true}) mainContainerII!: ElementRef<HTMLDivElement>;
  @ViewChild('SecIIText1',{static: true}) SecIIText1!: ElementRef<HTMLDivElement>;
  @ViewChild('secIIcontaImgs',{static: true}) secIIcontaImgs!: ElementRef<HTMLDivElement>;
  @ViewChild('logoMT',{static: true}) logoMT!: ElementRef<HTMLDivElement>;
  @ViewChild('logoANSV',{static: true}) logoANSV!: ElementRef<HTMLDivElement>;
  @ViewChild('logoST',{static: true}) logoST!: ElementRef<HTMLDivElement>;
  @ViewChild('logoPN',{static: true}) logoPN!: ElementRef<HTMLDivElement>;
  @ViewChild('logoANI',{static: true}) logoANI!: ElementRef<HTMLDivElement>;

  public especialidadesAll: IPracticalAreas[];
  public id = uuidv4();
  constructor( @Inject(DOCUMENT) private document: Document ) {
    this.especialidadesAll= PracticalAreasMock
  }

  ngOnInit(): void {
    this.iniAnimation();
    this.initScrollAnimations();
  }

  initScrollAnimations():void {
    gsap.to(this.mainContainerII.nativeElement, {
      scrollTrigger: {
        trigger: this.mainContainerII.nativeElement,
        scrub: true,
        start: '-2% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1,
      opacity: 1,
      delay: 0.9,
      y:50
    });
    // gsap.from(this.mainImg1.nativeElement, {
    //   scrollTrigger: {
    //     trigger: this.mainImg1.nativeElement,
    //     scrub: true,
    //     start: '50%',
    //   } as gsap.plugins.ScrollTriggerInstanceVars,
    //   duration: 2,
    //   opacity: 1,
    // });
  }
  iniAnimation() {
     gsap.from(this.mainText1.nativeElement, {
      delay: 0.7,
      duration: 0.9,
      opacity: 0,
      x: -200,

    });
    gsap.from(this.mainText2.nativeElement, {
      delay: 0.8,
      duration: 0.9,
      opacity: 0,
     x: -200,

    });
    gsap.from(this.mainText3.nativeElement, {
      delay: 0.9,
      duration: 0.9,
      opacity: 0,
      x: -200,

    });
    gsap.from(this.mainButton1.nativeElement, {
      delay: 1,
      duration: 0.9,
      opacity: 0,
      x: -200,

    });
    gsap.from(this.mainImg1.nativeElement, {
      delay: 1,
      duration: 2,
      opacity: 0,
      x: 100,
    });


    // SECCION II
    // gsap.from(this.mainContainerII.nativeElement, {
    //   delay: 2.5,
    //   duration: 1,
    //   opacity: 0,
    //   y: 100,
    // });
    // gsap.from(this.SecIIText1.nativeElement.childNodes, {
    //   delay: 2.6,
    //   duration: 0.5,
    //   opacity: 0,
    //   y: 20,

    // });
    // gsap.to(this.mainContainerII.nativeElement, {
    //   delay: 3.5,
    //   duration: 1,
    //   opacity: 0,
    //   y: 100,
    // });
  }
}
