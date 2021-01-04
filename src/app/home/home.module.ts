import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieCardComponent} from './movie-card/movie-card.component'
import {MovieCarouselComponent} from './movie-carousel/movie-carousel.component'
import {PopularPersonComponent} from './popular-person/popular-person.component'
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home.component'


@NgModule({
  declarations: [
    MovieCarouselComponent,
    PopularPersonComponent,
    MovieCardComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
