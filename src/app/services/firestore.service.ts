import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

    createDoc(data: any, path: string , id: string){
      const collection = this.firestore.collection(path);
      return collection.doc(id).set(data);
    }

    getId(){
      return this.firestore.createId();
    }

    getCollection(){

      console.log('Estoy por leer ')
      this.firestore.collection('Pasajeros').valueChanges().subscribe((res)=>{
        console.log('res ->',res)

      });
    }


    getCollection2 <tipo>(path: string){

      const collection = this.firestore.collection<tipo>(path);
      return collection.valueChanges();
    }

    getDoc<tipo>(path: string, id: string) {
      return this.firestore.collection(path).doc<tipo>(id).valueChanges()
     }
   
     updateDoc(path: string, id: string, data: any) {
       return  this.firestore.collection(path).doc(id).update(data);
     }

}
