import { Component, OnInit } from '@angular/core';
import {selectBookCollection, selectBooks} from "../state/books.selector";
import {Store} from "@ngrx/store";
import {addBook, removeBook, retrievedBookList} from "../state/books.actions";
import {BooksService} from "../books.service";
import {Book} from "../book-list/books.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-template',
  templateUrl: './book-template.component.html',
  styleUrls: ['./book-template.component.scss']
})
export class BookTemplateComponent implements OnInit {
  public books$:Observable<ReadonlyArray<Book>> = this.store.select(selectBooks);
  public bookCollection$=this.store.select(selectBookCollection);

  constructor(private store:Store,private api:BooksService) { }

  ngOnInit(): void {
    this.api.getBooks().subscribe((books)=>{
      this.store.dispatch(retrievedBookList({books}));
    })
  }
  public onAdd(bookId:string){
    this.store.dispatch(addBook({bookId}))
  }
  public onRemove(bookId:string){
    this.store.dispatch(removeBook({bookId}))
  }

}
