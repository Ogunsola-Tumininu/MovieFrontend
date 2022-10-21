import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'https://localhost:44375';

  constructor(
    private http: HttpClient,
  ) { }

  searchMovies(term: string){
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.url +'/api/values/Search?term='+term,   {headers: headers});
  }

  movieDetail(title: string){
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.url +'/api/values/Detail?title='+title,   {headers: headers});
  }

  previousSearch(){
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.url +'/api/values/PreviousSearch',   {headers: headers});
  }
}
