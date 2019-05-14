import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

declare function draw(data): any;

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent implements OnInit {

  id = new FormControl();

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  }

  vizualizuj() {
    this.httpService.get("https://hubformat.herokuapp.com/calculate/id?id=" + this.id.value).subscribe(
      data => {
        draw(data);
      }

    );
  }


}
