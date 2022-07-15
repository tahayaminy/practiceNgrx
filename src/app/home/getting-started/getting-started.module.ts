import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from './my-counter/my-counter.component';
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter.reducer";

const routes:Routes=[
  {path:'',component:MyCounterComponent}
]

@NgModule({
  declarations: [
    MyCounterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule.forRoot({count:counterReducer})
  ]
})
export class GettingStartedModule { }
