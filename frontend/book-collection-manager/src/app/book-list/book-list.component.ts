import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BookService } from '../book-service.service';

/**
 * A component which serves the purpose to display all the items in the list in a table
 */
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books: Book[] = [];
  editingBookId: number | null = null;
  displayedColumns: string[] = ['title', 'author', 'genre', 'actions'];

  constructor(private bookService: BookService, private router: Router) {}

  /**
   * Using the component lifecycle to make a intial API GET request to load the books if any in the table
   */
  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => (this.books = data),
      error: (error) => console.error('Failed to load books', error),
    });
  }

  isEditMode(bookId: number): boolean {
    return this.editingBookId === bookId;
  }

  toggleEditMode(bookId: number, cancel = false): void {
    if (cancel) {
      this.loadBooks();
    }
    this.editingBookId = this.isEditMode(bookId) ? null : bookId;
  }

  saveChanges(book: Book): void {
    this.bookService.updateBook(book).subscribe({
      next: () => {
        this.editingBookId = null;
      },
    });
  }

  addBook(): void {
    this.router.navigate(['/']);
  }
}
