import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CISC474Component } from './courses/cisc474/cisc474.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { CISC106Component } from './courses/cisc106/cisc106.component';
import { CISC108Component } from './courses/cisc108/cisc108.component';
import { CISC181Component } from './courses/cisc181/cisc181.component';
import { CISC220Component } from './courses/cisc220/cisc220.component';
import { AuthService } from './auth/auth-service'
import { CallBackComponentComponent } from './call-back-component/call-back-component.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CISC474Component,
    ErrorComponent,
    CISC106Component,
    CISC108Component,
    CISC181Component,
    CISC220Component,
    CallBackComponentComponent,

  ],
  imports: [
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
