import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CISC106Component } from './courses/cisc106/cisc106.component';
import { CISC108Component } from './courses/cisc108/cisc108.component';
import { CISC181Component } from './courses/cisc181/cisc181.component';
import { CISC220Component } from './courses/cisc220/cisc220.component';
import { CISC474Component } from './courses/cisc474/cisc474.component';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent}, 
  { path: 'courses/cisc106', component: CISC106Component},
  { path: 'courses/cisc108', component: CISC108Component},
  { path: 'courses/cisc181', component: CISC181Component},
  { path: 'courses/cisc220', component: CISC220Component},
  { path: 'courses/cisc474', component: CISC474Component },
  { path: 'callback', component: CallbackComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
