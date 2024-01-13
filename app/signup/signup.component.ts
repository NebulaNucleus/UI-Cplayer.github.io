import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterService } from '../router.service';
import { User } from '../user';
import { UserAuth } from '../userAuth';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({ 
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  userauth: UserAuth = new UserAuth();
  constructor(private route: RouterService, private userser: UserService, private auth: AuthenticationService) {
  }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  })

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get name() {
    return this.loginForm.get('name');
  }
  get mobile() {
    return this.loginForm.get('mobile');
  }

  signIn() {
    this.user.mobile = this.loginForm.value.mobile;
    this.user.username = this.loginForm.value.email;
    this.user.name = this.loginForm.value.name;
    this.userauth.username = this.loginForm.value.email;
    this.userauth.password = this.loginForm.value.password;
    this.auth.signup(this.userauth).subscribe(
      res => console.log(),
      err => console.log(err)
    ) 
    this.userser.signup(this.user).subscribe(
      res => console.log(),
      err=> console.log(err) 
    )
    this.route.tologin();  
  }
  tologin() {
    this.route.tologin();
  }  
  onFileChanged(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event => {
      this.user.image = reader.result.toString();
    })
  }
}
