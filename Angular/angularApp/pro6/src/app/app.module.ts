import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { AboutComponent } from 'src/about/about.component';
import { ServiceComponent } from 'src/service/service.component';
import { HomeComponent } from 'src/home/home.component';
import { UserEditComponent } from 'src/user-edit/user-edit.component';
import { UserViewComponent } from 'src/user-view/user-view.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';



const Routes=[
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'user-edit/:id',
    component:UserEditComponent
  },
  {
    path:'user-view/:id',
    component:UserViewComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent,
    UserEditComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
  HttpClientModule,
  RouterModule.forRoot(Routes,{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
