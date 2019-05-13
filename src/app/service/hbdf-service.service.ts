import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hbdf } from '../model/hbdf';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class HbdfServiceService {

  private hbdfsUrl: string;

  constructor(private http: HttpClient) {
    this.hbdfsUrl = 'http://localhost:8080/archive/get';
  }

  public findAll(): Observable<Hbdf[]> {

    return this.http.get<Hbdf[]>(this.hbdfsUrl);

  }

}
