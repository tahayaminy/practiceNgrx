import {Book} from "../book-list/books.model";

export interface appState{
  books:ReadonlyArray<Book>;
  collection:ReadonlyArray<string>;
}
