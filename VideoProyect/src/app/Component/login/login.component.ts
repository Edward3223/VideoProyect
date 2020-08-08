import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/Models/User.model';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: User;

  constructor( private auth: AuthService, private routes: Router ) { }

  ngOnInit(): void {

    this.usuario = new User()
  }

  Login(){

    Swal.fire({
      title: 'Espere...',
      icon: 'info',
    });
    Swal.showLoading();


    this.auth.logIn(this.usuario).subscribe(resp =>{
      console.log(resp)
      Swal.close()
      this.routes.navigateByUrl('/home')

    }, (err)=>{

      Swal.fire({
        title: err.error.error.message,
        icon: 'error',
      });
    })
  }

}
