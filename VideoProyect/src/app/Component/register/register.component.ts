import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: User;

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {

    this.usuario = new User()
    
  }

  onSubmit(){
    console.log(this.usuario)
    this.auth.SigUp(this.usuario).subscribe( resp =>{
      console.log(resp)

    }, (err) =>{
      alert(err.error.error.message)
    })
  }
}
