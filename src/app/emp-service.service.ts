import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  addVisitorUrl: string;
  constructor(private http: HttpClient) {
    this.addVisitorUrl = 'https://localhost:7024/api/OneStop/Addvisitor';
  }


  addVisitor(data: any) {
    return this.http.post('https://localhost:7024/api/OneStop/Addvisitor', data);
  }
}
