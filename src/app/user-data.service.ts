import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  addVisitorUrl: string;
  getAllVisitorUrl: string;
  getVisitorByIDUrl: string;
  updateVisitorUrl: string;
  deleteVisitorUrl: string;
  // user1: string[] = ['1', 'Jyoti', 'Chavan', 'Mumbai']
  // user2: string[] = ['2', 'Anuradha', 'Chavan', 'Mumbai']
  // user3: string[] = ['3', 'Abhi', 'Chavan', 'Mumbai']

  // UserAll: string[] = []

  // getUser1(): string[] { return this.user1 }
  // getUser2(): string[] { return this.user2 }
  // getUser3(): string[] { return this.user3 }
  constructor(private http: HttpClient) {
    this.addVisitorUrl = 'https://localhost:7024/api/OneStop/Addvisitor';
    this.getAllVisitorUrl = 'https://localhost:7024/api/OneStop/GetVisitor';
    this.getVisitorByIDUrl = 'https://localhost:7024/api/OneStop/GetvisitorById?VisitorID=';
    this.updateVisitorUrl = 'https://localhost:7024/api/OneStop/Updatevisitor?VisitorID=';
    this.deleteVisitorUrl = 'https://localhost:7024/api/OneStop/Deletevisitor?VisitorID=';
  }

  addVisitor(data: any) {
    return this.http.post('https://localhost:7024/api/OneStop/Addvisitor', data);
  }
  getAllVisitor() {
    return this.http.get('https://localhost:7024/api/OneStop/GetVisitor');
  }
  editVisitor(VisitorID: any, data: any) {
    return this.http.post('https://localhost:7024/api/OneStop/Updatevisitor?VisitorID=' + VisitorID, data);
  }
  getByIDVisitore(visitorID: any) {
    return this.http.get('https://localhost:7024/api/OneStop/GetvisitorById?VisitorID=' + visitorID);
  }
  deleteVisitor(visitorID: any) {
    return this.http.get('https://localhost:7024/api/OneStop/Deletevisitor?VisitorID=' + visitorID);
  }

}
