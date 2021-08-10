import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: Observable<User>;

  constructor(
    private nav: NavController,
    private toast: ToastController,
    private auth: AngularFireAuth
  ) { 
    this.isLoggedIn = auth.authState;
  }

  validar(user){
    this.auth.signInWithEmailAndPassword(user.email, user.senha)
    .then(() => this.nav.navigateForward('home'))
    .catch(() => this.mostrarErro());
  }

  private async mostrarErro(){
    const msg = await this.toast.create({
      message: 'Dados Incorretos',
      duration: 2000
    });

    msg.present();
  }

  createUser(user){
    this.auth.createUserWithEmailAndPassword(user.email, user.senha)
    .then(
      () => this.validar(user)
    );
  }

  recoverPass(email){
    this.auth.sendPasswordResetEmail(email)
    .then(() => {
      this.nav.navigateBack('auth');
    }).catch(error =>{
      console.log(error);
    });
  }

  logout(){
    this.auth.signOut().then(
      () => {
        this.nav.navigateBack('auth');
      }
    );
  }
}
