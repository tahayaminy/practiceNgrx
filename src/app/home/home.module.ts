import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";

const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'getting-started',
    loadChildren:()=>import('./getting-started/getting-started.module').then(m=>m.GettingStartedModule)
  },
  {
    path:'walk-throught',
    loadChildren:()=>import('./walkthrough/walkthrough.module').then(m=>m.WalkthroughModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class HomeModule { }
