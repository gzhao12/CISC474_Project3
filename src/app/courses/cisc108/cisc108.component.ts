import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../post';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-cisc108',
  templateUrl: './cisc108.component.html',
  styleUrls: ['./cisc108.component.scss']
})
export class CISC108Component implements OnInit {
  panelOpenState = false;
  CourseNumber = 'CISC 108';
  CourseName = 'Introduction to Computer Science I';
  CourseDesc = 'Computing and principles of programming with an emphasis on systematic program design. \
   Topics include functional programming, data abstraction, procedural abstraction, use of control and \
   state, recursion, testing, and object-oriented programming concepts.';

  restItems: any;
  restItemsUrl: string;
  restItemsPost: string;
  counter = 0;

  post = new Post('', '', 108, '', 0, 0);

  constructor(private http: HttpClient, private router: Router, public auth: AuthService) { }

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
    this.router.navigate(['/courses/cisc108']);
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
    post.post_section = 'tips';
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

