import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  visitorEmpForm !: FormGroup;
  public submitted: boolean = false;
  login: any;
  visitorData: any;
  isAddMode!: boolean;
  PageTitle: any;
  btnText: any;
  visitorID: number = 0;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private empServices: EmpServiceService
  ) {
    // this.login = [];
    // this.signupForm = this.formBuilder.group({
    //   firstName: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z-&. ]*$/)]],
    //   email: ['', [Validators.required, Validators.pattern('[a-z0-9-._]+@[a-z-._]+[.][a-z]{2,3}')]],
    //   password: ['', [Validators.required, Validators.minLength(10), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],

    // })
  }
  // ngOnInit(): void { }
  // submit(): void {
  //   debugger;
  //   this.login.push(this.signupForm.value)
  //   if (this.submitted = true) {
  //     this.toastr.success('Form submitted successfully!');
  //   }
  //   if (this.signupForm.invalid) {
  //     return;
  //   }
  //   this.submitted = true;

  ngOnInit(): void {
    this.visitorEmpForm = this.formBuilder.group({
      visitorID: 0,
      visitorName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z-&. ]*$/)]],
      visitorLocation: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z-&. ]*$/)]],
      visitorNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/g)]],
    });

  }


  addVisitor() {
    this.empServices.addVisitor(this.visitorEmpForm.value).subscribe((data: any) => {
      this.visitorData = data;
      if (data.statusCode == 200) {
        this.toastr.success('Success!', 'Record Added Successfully!');
        this.onReset();
        this.onSuccess();
      }
    }, (error => {
      this.toastr.error('Error!', error.error.Message);
    }))
  }

  public onSuccess() {
    setTimeout(() => {
      this.router.navigate(['/user-data']);
    }, 3000)
  }
  onReset() {
    this.visitorEmpForm.reset({});
    this.submitted = false;
  }
  SubmitEmpForm(): void {
    debugger;

    this.isAddMode = true;
    this.submitted = true;
    if (this.visitorEmpForm.invalid) {
      return;
    }
    if (this.visitorID == 0) {
      this.addVisitor();
    } else {
      // this.editEmployee();
    }
  }


}

