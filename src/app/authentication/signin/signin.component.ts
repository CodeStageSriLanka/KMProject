import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UtilService } from 'src/app/services/util/util.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private util: UtilService,

  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        'exampleuser@gmail.com',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      password: ['123456', Validators.required]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.util.showloading('Please Wait..!');
      this.authService.login(this.f.email.value, this.f.password.value).then((data) => {
        this.authService.getProfile(data.uid).then((info: any) => {

          if (info) {
            localStorage.setItem('uid', data.uid);
            localStorage.setItem('info', JSON.stringify(info));
            this.router.navigate(['/dashboard']);
            this.util.dismissAlert();
          } else {
            this.error = 'Invalid Login!!';
            this.util.dismissAlert();
          }
        });
      },(error) =>{
        this.error = 'Username and Password not valid !';
      });

  }
}
}
