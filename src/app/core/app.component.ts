import { Component } from '@angular/core';
import { } from '../mocks/books';


@Component({
  selector: 'bookstore',
  templateUrl: 'app.template.html',
})
export class AppComponent {
  books: Book[] = []; // use mocks data instead
  categories: Category[] = []; // use mocks data instead
  navClosed: Boolean = true;
  title: string = "Books by Hackages";

  clicked() {
    console.log('Will be implemented in the next section');
  }

  selectCategory(selectedCategory: Category) {}

  // filter books
  filterBooks(category: string) {}

  search(searchTerm: string){}

  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}
