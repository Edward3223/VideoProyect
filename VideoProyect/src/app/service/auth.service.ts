import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // Create new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login User
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]




  constructor(private http: HttpClient) { 
    this.readToken();
  }

  private apikey = 'AIzaSyDR7iS7eKooeypqzeezpF4gYRB_u6CkS8E'
  userToken: string;


  logOut(){

    localStorage.removeItem('token')

  }

  logIn( Profile: User ){

    const authData = {
      email: Profile.Email,
      password: Profile.Password,
      returnSecureToken: true
    }

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDR7iS7eKooeypqzeezpF4gYRB_u6CkS8E', 
      authData
    ).pipe(
      map( resp => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );

  }

  SigUp( Profile: User ){

    const authData = {
      email: Profile.Email,
      password: Profile.Password,
      returnSecureToken: true
    }

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDR7iS7eKooeypqzeezpF4gYRB_u6CkS8E', 
      authData
    ).pipe(
      map( resp => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );

  }

  private saveToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }

  readToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }

  authentication(){
    //si hay token retunr true en caso contrario false
    return this.userToken.length > 2 
  }

}
