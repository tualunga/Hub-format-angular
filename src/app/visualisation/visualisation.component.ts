import { Component, OnInit } from '@angular/core';

declare function draw(): any;

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    draw();
  }

}
