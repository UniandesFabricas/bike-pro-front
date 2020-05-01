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
  selected: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      userName:  ['', Validators.compose([Validators.required])],
      name:  ['', Validators.compose([Validators.required])],
      typeDocument:  ['', Validators.compose([Validators.required])],
      numberDocument:  ['', Validators.compose([Validators.required])],
      email:  ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      gender:  ['', Validators.compose([Validators.required])],
      bornDate:  ['', Validators.compose([Validators.required])],
      password:  ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      rePassword:  ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }


  setValueField(field, value) {
    console.log('field' , field , '=', value);
    this.registerForm.get(field).setValue(value);
    this.activeBtn = this.registerForm.status === 'VALID' ? true : false;
  }


  public registerUser() {
    const jsonRequest = {
      username: this.registerForm.get('userName').value,
      password: this.registerForm.get('password').value,
      name: this.registerForm.get('name').value,
      email: this.registerForm.get('email').value,
      birthdate: this.registerForm.get('bornDate').value,
      identification: {
        id: 1,
        number: this.registerForm.get('numberDocument').value,
        type: this.registerForm.get('typeDocument').value
      }
    };

  }

}
