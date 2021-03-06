import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ab-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  activeBtn = false;
  selected: string;
  placeHolderDate = 'Fecha de nacimiento';
  arrayTypeDocs = [
    { name: 'Tarjeta de Identidad', value: 'TARJETA_IDENTIDAD' },
    { name: 'Cédula', value: 'CEDULA' },
    { name: 'Cédula de Extranjería', value: 'CEDULA_EXTRANJERIA' },
    { name: 'Pasaporte', value: 'PASAPORTE' }
  ];

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      typeDocument: ['', Validators.compose([Validators.required])],
      numberDocument: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      bornDate: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      rePassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }


  setValueField(field, value) {
    this.registerForm.get(field).setValue(value);
    this.activeBtn = this.registerForm.status === 'VALID' ? true : false;
    if (field === 'bornDate') {
      this.placeHolderDate = '';
      this.formatDate();
    }
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

    this.userService.createUser(jsonRequest).subscribe(
      response => {
        console.log('registro exitoso');
      }, error => {
        console.log('Registro fallido');
      }
    );
    sessionStorage.setItem('userAuth', 'true');
    sessionStorage.setItem('user', this.registerForm.get('userName').value );
    this.route.navigate(['']);
  }

  public formatDate() {
    const month = this.registerForm.get('bornDate').value.value.getMonth() + 1;
    const day = this.registerForm.get('bornDate').value.value.getDate();
    const year = this.registerForm.get('bornDate').value.value.getFullYear();
    this.registerForm.get('bornDate').setValue(year + '-' + month + '-' + day + '-' + 'T00:00:00.000+0000');
  }

}
