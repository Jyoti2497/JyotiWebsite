import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorSService {
  addVisitorUrl: string;
  getAllVisitorUrl: string;
  getVisitorByIDUrl: string;
  updateVisitorUrl: string;
  deleteVisitorUrl: string;
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
