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

  usuario: User = new User;
  recuerdame = false;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor( private auth: AuthService, private routes: Router ) { }

  ngOnInit(): void {

    
    if ( localStorage.getItem('email') ) {
      this.usuario.Email = localStorage.getItem('email');
      this.recuerdame = true;
    }
    else if(!this.recuerdame){
      localStorage.removeItem('email')
    }
  }

  Login(){

    Swal.fire({
      title: 'Espere...',
      icon: 'info',
    });
    Swal.showLoading();

    if ( this.recuerdame ) {
      localStorage.setItem('email', this.usuario.Email);
    }
    else{
      localStorage.removeItem('email')
    }


    this.auth.logIn(this.usuario).subscribe(resp =>{
      console.log(resp)
      Swal.close()
      this.routes.navigateByUrl('/home')
      this.Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })

    }, (err)=>{

      Swal.fire({
        title: err.error.error.message,
        icon: 'error',
      });
    })
  }

}
