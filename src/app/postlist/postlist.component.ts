import { Component, OnInit } from '@angular/core';
import {ApiService} from '../Services/api.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
posts: any=[];
  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getPostsData().subscribe(data=>
    {
      this.posts = data.posts;
    })







  }

}
