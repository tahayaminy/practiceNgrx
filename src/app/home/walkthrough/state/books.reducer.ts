import {Book} from "../book-list/books.model";
import {retrievedBookList} from "./books.actions";
import {createReducer, on} from "@ngrx/store";

export const initialState:ReadonlyArray<Book>=[];

export const bookReducer = createReducer(
  initialState,
  on(retrievedBookList,(state,{books})=>books)
)
