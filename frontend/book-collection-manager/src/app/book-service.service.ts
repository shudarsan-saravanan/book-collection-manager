import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:5287/api/Books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  addBook(book: Book): Observable<Book> {
    return this.http
      .post<Book>(this.apiUrl, book)
      .pipe(catchError(this.handleError));
  }

  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${book.id}`, book);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    return throwError(() => new Error(errorMessage));
  }
}
