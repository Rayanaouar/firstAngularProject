import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component'
import {FooterComponent} from './footer/footer.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MDBBootstrapModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
