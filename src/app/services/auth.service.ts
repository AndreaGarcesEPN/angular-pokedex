import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public authFire: AngularFireAuth, 
    public router: Router, 
    public firestore: AngularFirestore) 
    { 
    this.authFire.authState.subscribe((user) => {
      console.log('userData: ', JSON.stringify(user));
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  loginWithEmail(email: string, password: string) {
    return this.authFire.signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(JSON.stringify(result));
      this.storeUserData(result.user);
      this.router.navigate(['/']);
    });
  }

  registerUser(email: string, password: string) {
    return this.authFire.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user);
      this.storeUserData(result.user);
      this.sendVerificationEmail();
      this.router.navigate(['/verify-user']);
    });
  }

  storeUserData(user: any) {
    this.firestore
    .collection('users')
    .doc(user.uid)
    .set({
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    })
    .then((result) => {
      console.log(JSON.stringify(result));
    })
  }

  sendVerificationEmail() {
    return this.authFire.currentUser.then((u: any) => {
      u.sendEmailVerification();
    })
  }
}
