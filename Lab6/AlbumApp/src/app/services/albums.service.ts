import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateAlbum(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createAlbum(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
