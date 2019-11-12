import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from 'src/table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'',redirectTo:'/table',pathMatch:'full'},
      { path:'table',component:TableComponent},
     

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
