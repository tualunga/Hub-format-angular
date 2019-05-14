import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-konversion',
  templateUrl: './konversion.component.html',
  styleUrls: ['./konversion.component.scss']
})
export class KonversionComponent implements OnInit {

  id2 = new FormControl();

  constructor(private httpService: HttpClient)
  { }

  ngOnInit()
  { }

  convertToCoo() {
    //this.httpService.get("http://localhost:8080/export/HBDF_matrix.xls?id=" + this.id.value);
    window.open("http://localhost:8080/export/HBDF_coo.xls?id=" + this.id2.value, '_self');
  }

  convertToMatrix() {
    //this.httpService.get("http://localhost:8080/export/HBDF_matrix.xls?id=" + this.id.value);
    window.open("http://localhost:8080/export/HBDF_matrix.xls?id=" + this.id2.value, '_self');
  }




}
