import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  about = false;
  help = false;
  contact = false;

  constructor() { }

  ngOnInit() {
  }

  aboutOnClick() {
    // clear previous help click
    if (this.help === true) {
      this.help = false;
    }
    // clear previous contact click
    if (this.contact === true) {
      this.contact = false;
    }


    if (this.about === false) {
      this.about = true;
    } else {
      this.about = false;
    }
  }

  helpOnClick() {
    // clear previous help click
    if (this.about === true) {
      this.about = false;
    }
    // clear previous contact click
    if (this.contact === true) {
      this.contact = false;
    }

    if (this.help === false) {
      this.help = true;
    } else {
      this.help = false;
    }
  }
  contactOnClick() {
    // clear previous help click
    if (this.help === true) {
      this.help = false;
    }
    // clear previous about click
    if (this.about === true) {
      this.about = false;
    }

    if (this.contact === false) {
      this.contact = true;
    } else {
      this.contact = false;
    }
  }
}


