import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; /// new
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  secondClick() {
      return console.log('clicked data service!!!!!!')
  }

  getUsers() {
      return this.http.get('https://reqres.in/api/users'); /// fake data site
  }
}
