import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hbdf } from '../model/hbdf';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HbdfServiceService {

  private hbdfsUrl: string;
  private hbdfsUrlToName: string;
  id3 = new FormControl();

  constructor(private http: HttpClient) {
    this.hbdfsUrl = 'http://localhost:8080/archive/get';
    this.hbdfsUrlToName

  }

  public findAll(): Observable<Hbdf[]> {
    if(name == null){
      return this.http.get<Hbdf[]>(this.hbdfsUrl);
    } else {
      return this.http.get<Hbdf[]>(this.hbdfsUrl);
    }


  }

}
