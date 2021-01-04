import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import {HomeComponent} from '../home/home.component'
import { HomeModule } from '../home/home.module';

const routes: Routes = [
  {path: 'main', pathMatch: 'full', redirectTo: 'home'},
  
  {path : 'home', component : HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }