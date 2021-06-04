import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-form-contact-us',
  templateUrl: './form-contact-us.component.html',
  styleUrls: ['./form-contact-us.component.scss']
})
export class FormContactUsComponent implements OnInit {
  @ViewChild('formConainer', { static: true })
  formConainer!: ElementRef<HTMLDivElement>;
  constructor() { }

  ngOnInit(): void {
    this.iniAnimation();
  }
  iniAnimation() {
    gsap.from(this.formConainer.nativeElement, {
      delay: 3,
      duration: 0.9,
      opacity: 0,
      y: -200,
      zIndex:1
    });
  }

}
