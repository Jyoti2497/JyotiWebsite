import { Component } from '@angular/core';
import { TableRow } from '../Validation/Password';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent {
  tableRows: TableRow[] = [];

  addTableRow(firstName: any, lastName: any, email: any, password: any) {
    const newRow = new TableRow(firstName, lastName, email, password);
    this.tableRows.push(newRow);
  }

}
