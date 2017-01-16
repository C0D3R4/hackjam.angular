// Entry point of our application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

// Import components
import { HeaderComponent } from '../components/header';
import { NavBarComponent } from '../components/navbar';
import { BookListComponent } from '../components/bookList';
import { SidebarComponent } from '../components/sidebar';

@NgModule({
   imports: [ BrowserModule ],
   declarations: [ 
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    BookListComponent,
    SidebarComponent,
    ],
   bootstrap: [ AppComponent ],
})
export class AppModule {

}