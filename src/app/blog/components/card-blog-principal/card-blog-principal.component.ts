import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-blog-principal',
  templateUrl: './card-blog-principal.component.html',
  styleUrls: ['./card-blog-principal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBlogPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
