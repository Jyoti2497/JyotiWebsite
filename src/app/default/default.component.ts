import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  data = [
    {
      id: 1,
      name: "Neo",
      age: 45,
      address: "123 Main St"
    },

  ];
  data2 = [
    {
      id: 1,
      name: "John",
      age: 30,
      address: "123 Main St"
    },

  ];
  data3 = [
    {
      id: 2,
      name: "Christine",
      age: 78,
      address: "123 Main St"
    },

  ];

  selectedData: any;
  Pricing(dataSet: string) {
    if (dataSet === 'data') {
      this.selectedData = this.data;
    } else if (dataSet === 'data2') {
      this.selectedData = this.data2;
    } else if (dataSet === 'data3') {
      this.selectedData = this.data3;
    }
  }
  dataAll = [
    {
      idall: 1,
      nameall: "Jack Leo",
      ageall: 45,
      addressall: "123 Main St"
    },
    {
      idall: 2,
      nameall: "Mark Manson",
      ageall: 25,
      addressall: "890 Jarmany St"
    },

    {
      idall: 3,
      nameall: "Duorjoy Datta",
      ageall: 55,
      addressall: "900 Japan St"
    },
    {
      idall: 4,
      nameall: "Sparrow Little",
      ageall: 56,
      addressall: "800 America St"
    },

    {
      idall: 5,
      nameall: "Maleficient Datta",
      ageall: 24,
      addressall: "700 Japan St"
    },
  ];
  allData = [this.dataAll];
  fetchAllData(dataAll) {
    return this.allData;
  }
}
