import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  activeBtn = false;

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user:  ['', Validators.compose([Validators.required])],
      password:  ['', Validators.compose([Validators.required])]
    });
  }

  setValueField(field, value) {
    this.loginForm.get(field).setValue(value);
    this.activeBtn = this.loginForm.status === 'VALID' ? true : false;
  }

  public loginUser() {
    const jsonRequest = {
      username: this.loginForm.get('user').value,
      password: this.loginForm.get('password').value,
    };

    this.userService.login(jsonRequest).subscribe(
        response => {
          sessionStorage.setItem('userAuth', 'true');
          this.route.navigate(['']);
        }, error => {
          sessionStorage.setItem('userAuth', 'false');
        }
      );
  }


}
