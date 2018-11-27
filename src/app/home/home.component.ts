import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export class Course {
  constructor(public name: string, public desc: string, public image: string) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  courseCtrl: FormControl;
  filteredCourses: Observable<any[]>;

  courses: Course[];

  constructor(private router: Router) {
    this.courseCtrl = new FormControl();
    this.courseCtrl.valueChanges.subscribe(val => {
    this.filterCourses(val);
    });
  }


  ngOnInit() {

    this.courses  = [
      {
        name: 'CISC 106',
        desc: 'General Computer Science for Engineers',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png'
      },
      {
        name: 'CISC 108',
        desc: 'Introduction to Computer Science I',
        image: 'https://racket-lang.org/img/racket-logo.svg'
      },
      {
        name: 'CISC 181',
        desc: 'Introduction to Computer Science II',
        image: 'https://www.softexia.com/wp-content/uploads/2017/04/Java-logo.png'
      },
      {
        name: 'CISC 220',
        desc: 'Data Structures',
        image: 'https://sdtimes.com/wp-content/uploads/2018/03/cpppp-490x490.png'
      },
      {
        name: 'CISC 474',
        desc: 'Advanced Web Technologies',
        // tslint:disable-next-line:max-line-length
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
      }
  ];
  this.filteredCourses = new Observable(observer => {
    setTimeout(() => {
        observer.next(this.courses);
    }, 1000);
  });
  }

  onEnter(evt: any, val: any) {
    if (evt.source.selected) {
      val = val.replace(/\s/g, '');
      val = val.toLowerCase();
      // alert(val);
      this.router.navigate(['courses/' + val]);
    }
  }

  filterCourses(name: string) {
    // tslint:disable-next-line:prefer-const
    let filteredData = this.courses.filter(state =>
    state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    this.filteredCourses = new Observable(observer => {
        observer.next(filteredData);
    });
}

}
