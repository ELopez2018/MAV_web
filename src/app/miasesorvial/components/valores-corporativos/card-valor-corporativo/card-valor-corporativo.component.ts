import { Component, Input, OnInit } from '@angular/core';
import { IPracticalAreas } from '@interfaces/practical-areas.interface';
import { ValoresCorporativosMocks } from '@root/core/mocks/valores-corporativos.mocks';

@Component({
  selector: 'app-card-valor-corporativo',
  templateUrl: './card-valor-corporativo.component.html',
  styleUrls: ['./card-valor-corporativo.component.scss']
})
export class CardValorCorporativoComponent implements OnInit {
@Input() valores!: IPracticalAreas;
  constructor() { }

  ngOnInit(): void {
  }

}
