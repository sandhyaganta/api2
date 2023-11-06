import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private getUrl = 'https://fakestoreapi.com/products/category/jewelery';


  constructor(private http: HttpClient) { }
}
