import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoProyect';


  constructor( private auth: AuthService,  private router:Router) { 
    
  }

  ngOnInit(): void {}

  authenticationDrawer(){
    if(this.auth.authentication()){
      return true

    }else{
      return false
    }

  }

  sigout(){
    this.auth.logOut()
    this.router.navigateByUrl('/login')
    this.auth.userToken = ''
  }


}


