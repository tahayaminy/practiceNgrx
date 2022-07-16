import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {scoreboardReducer} from "./scoreboard.reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({game:scoreboardReducer})
  ]
})
export class ReducersModule { }
