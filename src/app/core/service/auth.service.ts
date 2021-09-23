import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
    return !!this.$uid;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);


  constructor(
    private http: HttpClient,
    private auth : AngularFireAuth,
    private fire: AngularFirestore,) {

    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public currentUserValue( user) {
    return user;
  }

  public checkAuth() {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(user => {
        console.log(user);
        if (user) {
          localStorage.setItem('uid', user.uid);
          resolve(user);
        } else {
          this.logout();
          localStorage.clear();
          resolve(false);
        }
      });
    });
  }


  public getProfile(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fire.collection('Users').doc(id).get().subscribe((profile: any) => {
        resolve(profile.data());
      }, error => {
        reject(error);
      });
    });
  }

  login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            this.authInfo$.next(new AuthInfo(res.user.uid));
            resolve(res.user);
            localStorage.setItem('currentUser', JSON.stringify(res.user));
            this.currentUserValue(localStorage.setItem('uid', res.user.uid));
          }
        })
        .catch(err => {
          this.authInfo$.next(AuthService.UNKNOWN_USER);
          reject(`login failed ${err}`);

        });
    });
  }




  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('uid');
    this.currentUserValue(null);
    return of({ success: false });
  }
}
