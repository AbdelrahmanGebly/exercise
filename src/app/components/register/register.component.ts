import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMsg:string = '';
  constructor(private _AuthService:AuthService,private _Router:Router){}

  registerFrom:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    email: new FormControl('' , [Validators.required,Validators.minLength(3),Validators.email]),
    password: new FormControl('' , [Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern(/^\w{6,20}$/)]),
    rePassword: new FormControl('' , [Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern(/^\w{6,20}$/)]),
    phone: new FormControl('' , [Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern(/^01[0125][0-9]{8}$/)])
  });

  handleForm():void{
    this._AuthService.register(this.registerFrom.value).subscribe({
      next:(response)=>{
        if(response.message === 'success'){
          this._Router.navigate(['/login']);
        }
      },
      error:(error)=>{
        this.errorMsg = error.error.message;
      }
    })
  }
}
