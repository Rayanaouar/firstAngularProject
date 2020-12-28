import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = environment.api
  key: string = environment.key
  constructor(private http: HttpClient) {
}
  getPopularMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/movie/popular?api_key=${this.key}&language=fr`)
    
    
}
}
