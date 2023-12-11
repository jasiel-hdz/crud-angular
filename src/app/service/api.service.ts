import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


// import { ApiResponse } from '../interfaces/api-response';
// import { environment } from "environments/environment";


@Injectable({
  providedIn: "root",
})
export class ApiService {

  API_URL = 'http://127.0.0.1:8000/';



  constructor(private httpClient: HttpClient) { }
  
  
  buildQueryParams(params: any) {
    return (
      Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&") || ""
    );
  }

  get<T>(endpoint: string, params: any = {}) {
    const api_url = this.API_URL
    const queryParams = this.buildQueryParams(params);
    return this.httpClient
      .get(`${api_url}/${endpoint}${queryParams ? '?' + queryParams : ''}`)
      .toPromise() as Promise<T>;
  }

  post<T>(endpoint: string, body: any) {
    return this.httpClient
      .post(`${this.API_URL}/${endpoint}`, body)
      .toPromise() as Promise<T>;
  }

  put<T>(endpoint: string, body: any) {
    return this.httpClient
      .put(`${this.API_URL}/${endpoint}`, body)
      .toPromise() as Promise<T>;
  }

  delete<T>(endpoint: string) {
    return this.httpClient
      .delete(`${this.API_URL}/${endpoint}`)
      .toPromise() as Promise<T>;
  }

  patch<T>(endpoint: string, body: any) {
    return this.httpClient
      .patch(`${this.API_URL}/${endpoint}`, body)
      .toPromise() as Promise<T>;
  }

}
