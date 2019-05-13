import { Component, OnInit } from '@angular/core';
import { Hbdf } from 'src/app/model/hbdf';
import { HbdfServiceService } from 'src/app/service/hbdf-service.service';

@Component({
  selector: 'app-hbdf-list',
  templateUrl: './hbdf-list.component.html',
  styleUrls: ['./hbdf-list.component.scss']
})
export class HbdfListComponent implements OnInit {

  hbdfs: Hbdf[];

  constructor(private hbdfService: HbdfServiceService) {
  }

  ngOnInit() {
    this.hbdfService.findAll().subscribe(data => {
      this.hbdfs = data;
    });
  }

}
