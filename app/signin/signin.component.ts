import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Replace with your auth service path
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import for ReactiveFormsModule
import { Route } from '@angular/router';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-login',
  standalone: true, // Optional, remove if needed
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  SigninForm!: FormGroup;
 
 
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { } // Initialize auth service
 
  ngOnInit(): void {
    this.SigninForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // Validators.pattern('[a-zA-Z\\s\]*')
 
  onLogin() {
    if (this.SigninForm.valid) {
      const credentials = this.SigninForm.value;
      this.auth.signin(credentials)
        .subscribe({
          next: (res) => {
            alert('Signin Successful!');
            this.router.navigateByUrl('/home');
           
          },
          error: (err) => {
            alert('Signin Failed: ' + err.error.message);
          }
        });
    } else {
      console.log('Form is not valid');
    }
  }
}
