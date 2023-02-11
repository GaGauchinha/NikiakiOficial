import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.formBuilder.group(
   {
    username: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    password: this.formBuilder.control('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.formLogin.valid) {
      const credentials = {
        password: this.formLogin.value.password,
        username: this.formLogin.value.username
      };

      this.loginService.login(credentials).subscribe(
        next => {
          this.loginService.setLoggedUser(next)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            background: '#5F007E',
            color:'white',
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            background: '#5F007E',
            color:'white',
            icon: 'success',
            title: '🥰 Logada com Sucesso 🥰'
          })
          this.router.navigate(['/carteira'])
        })
    }
    else if (!this.formLogin.valid) {
      Swal.fire({
        title: 'Eita!',
        text: 'Senha ou Username errado Patrão',
        color: '#C83EFA',
        background: '#F8E3FF',
        imageUrl: './assets/image/papu-papu-papu-carlitos.gif',
        imageWidth: 224,
        imageHeight: 256,
        imageAlt: 'GIF Street Fighter',
      })
    }
  }

}
