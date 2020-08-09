import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nov-bar',
  templateUrl: './nov-bar.component.html',
  styleUrls: ['./nov-bar.component.css']
})
export class NovBarComponent implements OnInit {

  constructor(private auth: AuthService, private routes: Router) { }

  ngOnInit(): void {
  }

  sigout(){
    this.auth.logOut()
    this.routes.navigateByUrl('/login')
    
  }

}
