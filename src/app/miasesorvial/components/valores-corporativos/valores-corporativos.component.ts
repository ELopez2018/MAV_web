import { Component, OnInit } from '@angular/core';
import { IPracticalAreas } from '@interfaces/practical-areas.interface';
import { ValoresCorporativosMocks } from '@root/core/mocks/valores-corporativos.mocks';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-valores-corporativos',
  templateUrl: './valores-corporativos.component.html',
  styleUrls: ['./valores-corporativos.component.scss']
})
export class ValoresCorporativosComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    dots: false,
    navSpeed: 900,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
 valores: IPracticalAreas[] = ValoresCorporativosMocks;
  constructor() { }

  ngOnInit(): void {
  }

}
