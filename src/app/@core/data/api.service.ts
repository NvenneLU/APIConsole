import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': '9e61ecc2-f7d7-448a-b242-34f08be069bc'
  })
};

@Injectable()
export class ApiService  {
  constructor(private http: HttpClient) { }


  getKeys() {
    return this.http.get('http://api2.laurentian.ca:8080/api/security/keys', httpOptions);
  }
}
