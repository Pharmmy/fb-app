import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import chatitem from './chatitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textMessage = "";
  private itemsCollection: AngularFirestoreCollection<chatitem>;

  constructor(private afs: AngularFirestore){
    this.itemsCollection = afs.collection<chatitem>('lobby');
  }

  doIt(){
    console.log(this.textMessage)
    this.itemsCollection.add({
      sender: "Chimmy",
      message: this.textMessage
    })
    this.textMessage = ""
  }
}