import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
      // tslint:disable-next-line:semicolon
      err => reject(err))
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
      // tslint:disable-next-line:semicolon
      err => reject(err))
    });
  }

  Googlelogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
    .then(value => {
     console.log('Sucess', value),
     console.log('Hello ' + value.additionalUserInfo.profile.given_name),
        this.router.navigate(['/users']);
      }).catch(
       error => {
         console.log('Something went wrong: ', error);
        });
  }

  Facebooklogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider)
    .then(value => {
      console.log('Sucess', value),
      console.log('Hello ' + value.additionalUserInfo.profile.given_name),
        this.router.navigate(['/users']);
      }).catch(
        error => {
          console.log('Something went wrong: ', error);
        });
  }

  Twitterlogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider)
    .then(value => {
      console.log('Sucess', value),
      console.log('Hello ' + value.additionalUserInfo.profile.given_name),
        this.router.navigate(['/users']);
      }).catch(
        error => {
          console.log('Something went wrong: ', error);
        });
  }

  Githublogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.oAuthLogin(provider)
    .then(value => {
     console.log('Sucess', value),
     console.log('Hello ' + value.additionalUserInfo.profile.given_name),
        this.router.navigate(['/users']);
      }).catch(
       error => {
         console.log('Something went wrong: ', error);
        });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }

}
