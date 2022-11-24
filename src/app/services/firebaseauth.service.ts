import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  constructor(public auth: AngularFireAuth) { }

  login(email: string, password:string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.auth.signOut();
  }

  resgistrar( email: string, password:string){
    this.auth.createUserWithEmailAndPassword(email,password)
  }

  async getUid(){
    const user = await this.auth.currentUser //nos retornara las credenciales
    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }

}
