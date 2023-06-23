import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ObservableComponent } from './observable/observable.component';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ObservableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    CategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
