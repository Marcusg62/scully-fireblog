import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  public blog;
  public postTitle = '';

  constructor(public afs: AngularFirestore, public router: Router, public activatedRoute: ActivatedRoute) {
    this.postTitle = decodeURIComponent(this.router.url.split('/').pop());
    console.log(this.postTitle);

    afs.collection('blogs', ref => ref.where('title', '==', this.postTitle)).valueChanges().subscribe(val => {
      console.log(val);
      this.blog = val[0];
    });    



  }

  ngOnInit(): void {
  }

}
