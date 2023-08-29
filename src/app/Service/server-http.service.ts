import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model.model';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  server_url: string = "http://localhost:8081/api/products";
  httpOptions = {
    headers:  new HttpHeaders({
      'Content-type' : 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ResponseModel> {
    const url = `${this.server_url}`;
    return this.httpClient.get<ResponseModel>(url,this.httpOptions);
  }
  getProduct(code: string): Observable<ResponseModel>{
    const url = `${this.server_url}/`+ code;
    return this.httpClient.get<ResponseModel>(url,this.httpOptions);
  }
  deleteProduct(code: number): Observable<ResponseModel>{
    const url = `${this.server_url}/`+ code;;
    return this.httpClient.delete<ResponseModel>(url);
  }
  creatProduct(product: any):Observable<ResponseModel>{
    const url = `${this.server_url}`;
    return this.httpClient.post<ResponseModel>(url,product,this.httpOptions);
  }
  saveProduct(id: string,product:any): Observable<ResponseModel>{
    const url = `${this.server_url}/`+ id;
    return this.httpClient.put<ResponseModel>(url, product);
  }
}
