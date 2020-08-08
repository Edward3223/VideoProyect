import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User.model';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: User;


  
  constructor( private auth: AuthService, private routes: Router ) { }

  ngOnInit(): void {


    this.usuario = new User()
    
  }

  onSubmit(){



    console.log(this.usuario)
    this.auth.SigUp(this.usuario).subscribe( resp =>{
      Swal.fire({
        title: 'Se ha registrado correctamente!!',
        icon: 'success',
      });
      this.routes.navigateByUrl('/login')
      console.log(resp)

    }, (err) =>{
      Swal.fire({
        title: err.error.error.message,
        icon: 'error',
      });
    })
  }
}
