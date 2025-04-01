import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
  })
export abstract class GenericService<T> {
  private apiUrl : string;
  constructor(protected http : HttpClient, protected url : string) {
    this.apiUrl = environment.baseUrl + this.url;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getById(id : number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }


  create(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, entity);
  }

  update(id: number, entity: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, entity);
  }

 delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
