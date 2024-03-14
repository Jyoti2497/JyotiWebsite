import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterServiceService } from '../register-service.service';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  public submitted: boolean = false;
  loginData: any;
  ID: number = 0;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private registerService: RegisterServiceService
  ) {
    // this.loginData = [];
    this.registrationForm = this.formBuilder.group({
      ID: 0,
      firstName: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z-&. ]*$/)]],
      lastName: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z-&. ]*$/)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9-._]+@[a-z-._]+[.][a-z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,12}')]],

    })
  }
  ngOnInit(): void { }
  submit(): void {

    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    this.registerService.regiterUser(this.registrationForm.value).subscribe((data: any) => {
      this.loginData = data;
      if (data.statusCode == 200) {
        this.toastr.success('Success!', 'Registered!');
        this.onReset();
        this.router.navigate(['/app-signup']);
      }
    }, (error => {
      this.toastr.error('Error!', error.error.Message);
    }))
    // this.login.push(this.registrationForm.value)
    // if (this.submitted = true) {
    //   this.toastr.success('Registration Completed!');
    //   console.log(this.registrationForm.value)
    // }

    // if (this.registrationForm.invalid) {
    //   return;
    // }
    // this.submitted = true;

    // var firstName = this.registrationForm.value.firstName;
    // var lastName = this.registrationForm.value.lastName;
    // var email = this.registrationForm.value.email;
    // var password = this.registrationForm.value.password;
    // if (firstName == "Jyoti" && lastName == "Chavan" && email == "jyoti24@gmail.com" && password == "Jyoti2497@") {
    //   this.router.navigate(['/home']);
    // }
    // this.submitted = true;
    // if (this.registrationForm.invalid) {
    //   return;
    // }
  }


  onReset() {
    this.registrationForm.reset({});
    this.submitted = false;
  }

}
