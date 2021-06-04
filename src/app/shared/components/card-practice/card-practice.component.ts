import { Component, Input, OnInit } from '@angular/core';
import { IPracticalAreas } from '@interfaces/practical-areas.interface';

@Component({
  selector: 'app-card-practice',
  templateUrl: './card-practice.component.html',
  styleUrls: ['./card-practice.component.scss']
})
export class CardPracticeComponent implements OnInit {
  @Input() especialidad!: IPracticalAreas;
  constructor() { }

  ngOnInit(): void {
  }

}
