import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageListComponent } from './core/components/page-list/page-list.component';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, PageListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
