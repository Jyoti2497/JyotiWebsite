import { Visitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorSService } from '../visitor-s.service';

@Component({
  selector: 'app-visitor-all',
  templateUrl: './visitor-all.component.html',
  styleUrls: ['./visitor-all.component.css']
})
export class VisitorAllComponent {
  // VisitorForm !: FormGroup;
  // visitorList: Visitor[] = [];
  // visitor: any;
  // visitorData: any;
  // submitted: boolean = false;
  // isAddMode!: boolean;
  // PageTitle: any;
  // btnText: any;
  // visitorID: number = 0;


  // constructor(private VisServ: VisitorSService,
  //   private router: Router,
  //   private formBuilder: FormBuilder,) { }



  // navigate() {
  //   this.router.navigate(['/addEmployee']);
  // }
  // ngOnInit(): void {
  //   this.VisitorForm = this.formBuilder.group({
  //     visitorID: 0,
  //     visitorName: [''],
  //     visitorLocation: [''],
  //     visitorNo: ['']
  //   });
  //   this.VisServ.getAllVisitor().subscribe((res: any) => {
  //     this.visitor = res.data;
  //   })
  // }

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
  showData(dataSet: string) {
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
