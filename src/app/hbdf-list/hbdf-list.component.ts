import { Component, OnInit } from '@angular/core';
import { Hbdf } from 'src/app/model/hbdf';
import { HbdfServiceService } from 'src/app/service/hbdf-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hbdf-list',
  templateUrl: './hbdf-list.component.html',
  styleUrls: ['./hbdf-list.component.scss']
})
export class HbdfListComponent implements OnInit {

  hbdfs: Hbdf[];
  id6 = new FormControl();

  constructor(private hbdfService: HbdfServiceService) {
  }

  ngOnInit() {

  }

  find(){
    this.hbdfService.findAll(this.id6.value).subscribe(data => {
      this.hbdfs = data;
    });
  }

}
