import { Component, OnInit } from '@angular/core';
import { IPracticalAreas } from '@interfaces/practical-areas.interface';
import { BlogsMock } from '@root/core/mocks/blog.mocks';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogsAll: IPracticalAreas[] = BlogsMock;
  constructor() { }

  ngOnInit(): void {
  }

}
