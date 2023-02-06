import { Component } from '@angular/core';
import {Firestore, collection} from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cogneet-erp';

  constructor(private store: Firestore) {
    console.log(store)
  }

  items = collection(this.store,'items')
  
}
