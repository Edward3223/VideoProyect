import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // Create new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login User
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor(private http: HttpClient) { }

  private apikey = 'AIzaSyDR7iS7eKooeypqzeezpF4gYRB_u6CkS8E'


  logOut(){

  }

  logIn( Profile: User ){

  }

  SigUp( Profile: User ){

    const authData = {
      email: Profile.Email,
      password: Profile.Password,
      returnSecureToken: true
    }

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDR7iS7eKooeypqzeezpF4gYRB_u6CkS8E', 
      authData
    );

  }

}
