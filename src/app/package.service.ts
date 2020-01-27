import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor( private http: HttpClient ) { }

  getPackages() {
    return this.http.get('/assets/v-packages.json');
  }
}
