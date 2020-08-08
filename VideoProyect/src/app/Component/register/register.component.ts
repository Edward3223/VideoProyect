import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: User;

  constructor() { }

  ngOnInit(): void {

    this.usuario = new User()
    this.usuario.Email = 'e.cabrera99@hotmail.com'
  }

  onSubmit(){
    console.log(this.usuario)
  }
}
