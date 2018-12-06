import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-back-component',
  templateUrl: './call-back-component.html',
  styleUrls: ['./call-back-component.scss']
})
export class CallBackComponent implements OnInit {

   //in your constructor
   constructor(public router: Router){}


  ngOnInit() {
    //navigation link.
    this.router.navigate(['/']);
  }

}
