import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Info } from 'src/app/model/info';
declare function draw(data): any;

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent implements OnInit {

  id = new FormControl();
  infos: Info;
  hero: string = "ALOHA";

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  }

  vizualizuj() {
    this.httpService.get("http://localhost:8080/calculate/id?id=" + this.id.value).subscribe(
      data => {
        draw(data);
      });

  };

    getInfo() {
    this.httpService.get("http://localhost:8080/visualisation/get?id=" + this.id.value).subscribe(
      (res : Info) => {
        this.infos = res;
        console.log(this.infos);
      });

    }

}
