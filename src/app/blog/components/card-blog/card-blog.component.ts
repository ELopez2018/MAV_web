import { Component, Input, OnInit } from '@angular/core';
import { IPracticalAreas } from '@interfaces/practical-areas.interface';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss']
})
export class CardBlogComponent implements OnInit {
@Input() blog!: IPracticalAreas;
  constructor() { }

  ngOnInit(): void {
  }

}
