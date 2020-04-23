import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ab-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  activeBtn = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      names:  ['', Validators.compose([Validators.required])],
      lastNames:  ['', Validators.compose([Validators.required])],
      email:  ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      phone:  ['', Validators.compose([Validators.required])],
      gender:  ['', Validators.compose([Validators.required])],
      bornDate:  ['', Validators.compose([Validators.required])],
      password:  ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      rePassword:  ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }


  setValueField(field, value) {
    this.registerForm.get(field).setValue(value);
    this.activeBtn = this.registerForm.status === 'VALID' ? true : false;
  }


  public update() {
    console.log('btn register');
  }


}
