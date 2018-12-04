import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../post';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cisc106',
  templateUrl: './cisc106.component.html',
  styleUrls: ['./cisc106.component.scss']
})
export class CISC106Component implements OnInit {
  panelOpenState = false;
  CourseNumber = 'CISC 106';
  CourseName = 'General Computer Science for Engineers ';
  CourseDesc = 'Principles of computer science illustrated and applied \
   through programming in a general-purpose language. Programming projects \
   illustrate computational problems, styles, and issues that arise in engineering.';

  restItems: any;
  restItemsUrl: string;
  restItemsPost: string;
  counter = 0;

  post = new Post('', '', 106, '', 0, 0);

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getRestItems();
  }

  updateUpvotes(result) {
    result.up_votes ++;
    this.updatePost(result);

  }

  updateDownvotes(result) {
    result.down_votes --;
    this.updatePost(result);

  }

  loadMore() {

  }

  updatePost (result) {
    this.restItemsPost = 'http://localhost:3000/' + result._id;
    this.http.put(this.restItemsPost, result).subscribe((data) => {
      console.log('POST Success');
    });
    this.router.navigate(['/courses/cisc106']);
  }

  // Post a Description

  addPostDesc (post) {
    post.post_section = 'course_desc';
    this.restItemsPost = 'http://localhost:3000/addpost';
    this.http.post(this.restItemsPost, post).subscribe((data) => {
      console.log('POST Success');
    });
    window.location.reload();
  }

  addPostTips (post) {

    this.restItemsPost = 'http://localhost:3000/addpost';
    this.http.post(this.restItemsPost, post).subscribe((data) => {
      console.log('POST Success');
    });
    window.location.reload();
  }
  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      );
  }


  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    this.restItemsUrl = 'http://localhost:3000/allposts';
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}

