import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../post';
import { Router } from '@angular/router';
import { DialogComponent } from '../../dialog-window/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';




@Component({
  selector: 'app-cisc474',
  templateUrl: './cisc474.component.html',
  styleUrls: ['./cisc474.component.scss']
})
export class CISC474Component implements OnInit {
  panelOpenState = false;
  CourseNumber = 'CISC 474';
  CourseName = 'Advanced Web Technologies';
  CourseDesc = 'Programming and architecture of web servers and the technologies for implementing high performance \
  sophisticated web sites for applications like e-commerce. Students learn how to install and set-up a web server \
  how to write and install programs for a web server, and how to design and implement \
  multi-tier client/server applications with database backends.';

  restItems: any;
  restItemsUrl: string;
  restItemsPost: string;
  counter = 0;
  isCollapsed = false;

  post = new Post('', '', 474, null, 0, 0);

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

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

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogComponent, dialogConfig);
}


  updatePost (result) {
    this.restItemsPost = 'http://localhost:3000/' + result._id;
    this.http.put(this.restItemsPost, result).subscribe((data) => {
      console.log('POST Success');
    });
    this.router.navigate(['/courses/cisc474']);
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

