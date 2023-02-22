import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-visor-video',
  templateUrl: './visor-video.component.html',
  styleUrls: ['./visor-video.component.scss']
})
export class VisorVideoComponent implements OnInit {
@Input() title: string ="Mattis eget lectus vel, viverra rhoncus ligula. Aenean risus odio, semper";
  constructor() { }

  ngOnInit(): void {
    videojs
  }

}
