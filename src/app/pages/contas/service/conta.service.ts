import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  collection : AngularFirestoreCollection;

  constructor(
    private db : AngularFirestore
  ) { }

  registrarConta(conta){
    conta.id = this.db.createId();
    this.collection = this.db.collection('contas');
    return this.collection.doc(conta.id).set(conta);
  }
  lista(tipo){
    this.collection = this.db.collection('contas', ref => ref.where('tipo', '==', tipo));
    return this.collection.valueChanges();
  }
  remove(conta){
    this.collection = this.db.collection('contas');
    this.collection.doc(conta.id).delete();
  }
}
