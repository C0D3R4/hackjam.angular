import { Component, Input } from '@angular/core';
import { Book } from '../../mocks/books';

@Component({
    selector: 'bs-book-list',
    templateUrl: 'bookList.template.html',
})
export class BookListComponent {
    @Input() books: Book[];
    @Input() isSidebarOpen: boolean;
}