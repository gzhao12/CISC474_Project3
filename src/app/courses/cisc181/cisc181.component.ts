import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../post';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';


@Component({
  selector: 'app-cisc181',
  templateUrl: './cisc181.component.html',
  styleUrls: ['./cisc181.component.scss']
})
export class CISC181Component implements OnInit {

  CourseNumber = 'CISC 181';
  CourseName = 'Introduction to Computer Science II';
  CourseDesc = 'Principles of computer science illustrated and applied through \
   programming in an object oriented language. Programming projects illustrate \
   computational problems, styles and issues that arise in computer systems development \
   and in all application areas of computation.';

  restItems: any;
  restItemsUrl: string;
  restItemsPost: string;
  counter = 0;

  post = new Post('', '', 181, null, 0, 0);

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
    this.router.navigate(['/courses/cisc181']);
  }

  // Post a Description

  addPost (post) {
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

