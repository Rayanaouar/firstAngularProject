import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {SharedModule} from '../shared/shared.module';
import {HomeModule} from '../home/home.module';
import { MainRoutingModule } from './main-routing.module';






@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HomeModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
