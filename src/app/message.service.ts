import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatInput } from '@angular/material/input';



@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  
  constructor(private _http: HttpClient) {}

  sendMessageGet(body) {
    console.log("in get function");
    return this._http.get('http://localhost:3000/sendmail', body);
  }

  sendMessagePost(body) {
      console.log("in post function");
      return this._http.post('http://localhost:3000/sendmail', body);
  }

  

  

}
