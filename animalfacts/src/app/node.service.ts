import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http : HttpClient) { }

  dogFacts(){
    return this.http.get('http://127.0.0.1:8888/dogFacts/');
  }

  catFacts(){
    return this.http.get('http://127.0.0.1:8888/catFacts/');
  }
}
