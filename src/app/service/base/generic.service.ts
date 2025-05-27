import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
  })
export abstract class GenericService<T> {
  protected apiUrl : string;
  constructor(protected http : HttpClient, protected url : string) {
    this.apiUrl = environment.baseUrl + this.url;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getAllActive(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/active`);
  }

  getById(id : number | string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }


  create(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, entity);
  }

  update(id: number | string, entity: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, entity);
  }

 delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  softDelete(id: number | string): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${id}`, { active: false });
  }
}
