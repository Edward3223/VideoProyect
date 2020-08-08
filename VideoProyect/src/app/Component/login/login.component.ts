import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/Models/User.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: User;

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {

    this.usuario = new User()
  }

  Login(){


    this.auth.logIn(this.usuario).subscribe(resp =>{
      console.log(resp)
    }, (err)=>{
      alert(err.error.error.message)
    })
  }

}
