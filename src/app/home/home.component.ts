import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Observable<any>;

  constructor(public firestore: AngularFirestore) {
    this.blogs = firestore.collection('blogs').valueChanges();
  }

  ngOnInit(): void {
  }

}
