import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    return this.http.post("https://localhost:7024/api/RegiLogin/LoginUser", data);
  }


  regiterUser(data: any) {
    return this.http.post("https://localhost:7024/api/RegiLogin/RegisterUser", data)

  }
}
