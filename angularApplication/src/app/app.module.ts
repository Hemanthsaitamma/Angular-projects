import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { HomeComponent } from './componenets/home/home.component';


const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'user_edit/:id', component: UserEditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
