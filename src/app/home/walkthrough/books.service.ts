import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "./book-list/books.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url='https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';
  constructor(private http:HttpClient) { }

  getBooks():Observable<Array<Book>>{
    return this.http.get<{items:Book[]}>(this.url).pipe(map((books)=>books.items||[]))
  }
}
