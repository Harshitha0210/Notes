import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  signupForm!: FormGroup;
isFormSubmitted: any;
// email: any;
 
  constructor(private fb: FormBuilder, private auth: AuthService,private router:Router) {
    this.signupForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\\s\]*')]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
 
    });
 
  }
 
  ngOnInit(): void {
 
  }
 
  onSubmit() {
    if (this.signupForm.valid) {
      // Extract form data (avoid using an unnecessary argument)
      const userObj = {
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      };
 
      // Perform registration logic using AuthService
      this.auth.register(userObj)
        .subscribe({
          next: (res) => {
            alert(res.message); // Handle successful registration response
            this.router.navigateByUrl('/signin')
          },
          error: (err) => {
            alert(err?.error.message); // Handle registration error
          }
        });
    } else {
      // Handle form validation errors (optional)
      console.error('Form is invalid');
    }
  }
}
 