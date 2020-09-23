import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/child';

@Injectable({
  providedIn: 'root'
})
export class ChildListService {

  constructor(private http: HttpClient) { }

  getAll(params): Observable<any> {
    return this.http.get(baseUrl, { params });
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getByParentId(id):Observable<any> {
    return this.http.get(`${baseUrl}/parent-id/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }
}