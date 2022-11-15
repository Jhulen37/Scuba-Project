import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  isLoginMode = true;
  public registerForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const email = this.registerForm.get('email')!.value;
    const password = this.registerForm!.get('password')!.value;
    if (this.isLoginMode) {
      this.authenticationService.login(email, password).subscribe((res) => {
        this.router.navigate(['']);
      });
    } else {
      this.authenticationService.signup(email, password).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
