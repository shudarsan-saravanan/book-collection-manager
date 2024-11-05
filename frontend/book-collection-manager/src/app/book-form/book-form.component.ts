import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BookService } from '../book-service.service';
import { Book } from '../models/book.model';

/**
 * A component to accept user input through a reactive form to store the books
 */
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
  bookForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  /**
   * Function to support a POST request when a user wants to add details of the book to the colletion
   */
  onSubmit(): void {
    if (this.bookForm.valid) {
      const bookDetails: Book = this.bookForm.value;
      this.bookService.addBook(bookDetails).subscribe({
        next: () => {
          this.snackBar.open('Book added successfully!', 'Close', {
            duration: 3000,
          });
          this.bookForm.reset();
        },
        error: (error) => {
          this.snackBar.open(`Failed to add book: ${error.message}`, 'Close', {
            duration: 3000,
          });
        },
      });
    }
  }

  clearForm(): void {
    this.bookForm.reset();
  }

  bookList(): void {
    this.router.navigate(['/list']);
  }
}
