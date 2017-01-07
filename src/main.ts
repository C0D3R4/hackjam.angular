import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/core/app.module';

import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'bookstore',
  template: 'App is running!!'
})
export class AppComponent {}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent ],
  bootstrap: [ AppComponent],
})
export class AppModule { }


const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
