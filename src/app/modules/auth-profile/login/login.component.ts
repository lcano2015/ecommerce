import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public show: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }
}

//   //  public loginForm: FormGroup;
//   public show: boolean = false;

//   // loginForm = new FormGroup({
//   //   email :
//   // })

//   constructor(private fb: FormBuilder) {}

//   loginForm = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', Validators.required],
//   });

//   showPassword() {
//     this.show = !this.show;
//   }

//   signIn() {
//     console.log('hola');
//     // if(!this.loginForm.value.email || !this.loginForm.value.password) {
//     //   Swal.fire({
//     //     icon: 'error',
//     //     title: 'Oops...',
//     //     text: 'Email and password is required.',
//     //   });
//     // } else {
//     //   Swal.fire({
//     //     icon: 'success',
//     //     title: 'Success',
//     //     text: 'Logged In successfully.',
//     //   });
//     // }
//   }
// }
