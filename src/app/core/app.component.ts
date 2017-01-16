import { Component } from '@angular/core';
import  categories, {  Category } from '../mocks/categories';
import { Book, mockBooks } from '../mocks/books';


@Component({
  selector: 'bookstore',
  templateUrl: 'app.template.html',
})
export class AppComponent {
  books: Book[] = mockBooks; // use mocks data instead
  categories: Category[] = categories; // use mocks data instead
  navClosed: Boolean = true;
  title: string = "Books by Hackages";

  clicked() {
    console.log('Will be implemented in the next section');
  }

  selectCategory(selectedCategory: Category) {
   // change category
    this.categories = this.categories.map(category => {
      category.selected = selectedCategory === category;
      return category;
    });
    this.filterBooks(selectedCategory.name);
  }

  // filter books
  filterBooks(category: string) {
    if(category.toLowerCase() === 'all')
      this.books = mockBooks;
    else
      this.books = mockBooks
      .filter(book => book.category.toLowerCase().includes(category.toLowerCase()));
  }

  search(searchTerm: string){
    searchTerm = searchTerm.toLowerCase();
    if(!searchTerm) {
      this.books = mockBooks;
    } else {
      this.books = mockBooks.filter(book => 
        book.category.toLowerCase().includes(searchTerm)
        || book.title.toLowerCase().includes(searchTerm));
    }
  }

  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}
