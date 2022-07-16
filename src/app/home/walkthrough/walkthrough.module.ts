import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import {StoreModule} from "@ngrx/store";
import {bookReducer} from "./state/books.reducer";
import {collectionReducer} from "./state/collection.reducer";
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookTemplateComponent } from './book-template/book-template.component';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes=[
  {path:'',component:BookTemplateComponent}
];

@NgModule({
  declarations: [
    BookListComponent,
    BookCollectionComponent,
    BookTemplateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule.forRoot({books:bookReducer,collection:collectionReducer})
  ]
})
export class WalkthroughModule { }
