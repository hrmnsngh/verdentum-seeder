import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(submission) {
    alert(submission);
  }

  showPass() {
    this.showPassword = !this.showPassword;

  }

  signIn(){
    if(this.username && this.password){
      this.router.navigate(['/main']);
    }
  }

  forgotPassword(){

  }


}
