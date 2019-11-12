import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from 'src/input/input.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
