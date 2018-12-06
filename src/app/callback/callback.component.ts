import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback.component',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

   //in your constructor
   constructor(public router: Router){}


  ngOnInit() {
    //navigation link.
    this.router.navigate(['/']);
  }

}