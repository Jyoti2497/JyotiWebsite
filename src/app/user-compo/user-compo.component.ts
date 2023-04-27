import { Visitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-compo',
  templateUrl: './user-compo.component.html',
  styleUrls: ['./user-compo.component.css'],
  providers: [UserDataService]
})
export class UserCompoComponent {

  VisitorForm !: FormGroup;
  visitorList: Visitor[] = [];
  visitor: any;
  visitorData: any;
  submitted: boolean = false;
  isAddMode!: boolean;
  PageTitle: any;
  btnText: any;
  visitorID: number = 0;
  user1: string[] = [];
  user2: string[] = [];
  user3: string[] = [];


  // getUser1DetailsFromService() {
  //   this.user1 = this.userService.getUser1()
  // }
  // getUser2DetailsFromService() {
  //   this.user2 = this.userService.getUser2()
  // }
  // getUser3DetailsFromService() {
  //   this.user3 = this.userService.getUser3()
  // }

  constructor(private userService: UserDataService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,) { }


  // getALl() {
  //   this.user1 = this.userService.getUser1()
  //   this.user2 = this.userService.getUser2()
  //   this.user3 = this.userService.getUser3()

  // }

  navigate() {
    this.router.navigate(['/addEmployee']);
  }
  ngOnInit(): void {
    this.VisitorForm = this.formBuilder.group({
      visitorID: 0,
      visitorName: [''],
      visitorLocation: [''],
      visitorNo: ['']
    });
    this.userService.getAllVisitor().subscribe((res: any) => {
      this.visitor = res.data;
    })
    this.route.paramMap.subscribe((param) => {
      this.visitorID = Number(param.get('Id'));
      if (this.visitorID != 0) {
        this.getEmployeeById(this.visitorID);
        this.PageTitle = "Edit Employee"
        this.btnText = "Edit"
      }
    })

  }
  SubmitEmpForm(): void {
    debugger;

    this.isAddMode = true;
    this.submitted = true;
    if (this.VisitorForm.invalid) {
      return;
    }
    if (this.visitorID == 0) {
      // this.edit();
    }
  }
  getEmployeeById(visitorID: any) {
    debugger;
    this.userService.getByIDVisitore(visitorID).subscribe((data: any) => {
      this.VisitorForm.patchValue({ visitorID: data.data.visitorID })
      this.VisitorForm.patchValue({ visitorName: data.data.visitorName })
      this.VisitorForm.patchValue({ visitorLocation: data.data.visitorLocation })
      this.VisitorForm.patchValue({ visitorNo: data.data.visitorNo })
    })
  }

  editEmployee(id: any) {
    debugger;
    this.userService.getByIDVisitore(id).subscribe((data: any) => {
      this.VisitorForm.patchValue({ visitorID: data.data.visitorID })
      this.VisitorForm.patchValue({ visitorName: data.data.visitorName })
      this.VisitorForm.patchValue({ visitorLocation: data.data.visitorLocation })
      this.VisitorForm.patchValue({ visitorNo: data.data.visitorNo })
    })
  }

  edit() {
    debugger;
    this.userService.editVisitor(this.visitorID, this.VisitorForm.value).subscribe((data: any) => {
      if (data.statusCode == 200) {
        // alert(data.message);
        this.toastr.success('Success!', 'Record Updated Successfully!');
        this.ngOnInit();
      }
    })
  }

  deleteEmployee(id: any) {
    debugger;
    this.userService.deleteVisitor(id).subscribe((data: any) => {
      if (data.statusCode == 200) {
        // alert(data.message)
        this.toastr.success('Success!', 'Record Deleted Successfully!');
        this.ngOnInit();
      }
    })
  }


}

