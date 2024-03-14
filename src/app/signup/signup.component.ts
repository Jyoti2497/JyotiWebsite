import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  public submitted: boolean = false;
  signupData: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private registerServi: RegisterServiceService
  ) {
    // this.login = [];
    this.signupForm = this.formBuilder.group({
      // firstName: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z-&. ]*$/)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9-._]+@[a-z-._]+[.][a-z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,12}')]],

    })
  }
  ngOnInit(): void { }
  submit(): void {
    debugger
    // this.login.push(this.signupForm.value)
    // if (this.submitted = true) {
    //   this.toastr.success('Form submitted successfully!');
    //   console.log(this.signupForm.value)
    // }
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.registerServi.loginUser(this.signupForm.value).subscribe((data: any) => {
      this.signupData = data;
      if (data.statusCode == 200) {
        this.toastr.success('Login Successfull!');
        this.onReset();
        this.onSuccess();
      }
    }, (error => {
      this.toastr.error('Error!', error.error.Message);
      prompt("Invalid message")
    }))


  }
  onReset() {
    this.signupForm.reset({});
    this.submitted = false;
  }
  public onSuccess() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000)
  }

}

