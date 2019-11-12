import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { UsereditComponent } from 'src/useredit/useredit.component';
import { HeaderComponent } from 'src/Header/header.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { HomeComponent } from 'src/home/home.component';

const Routes=[
  {
    path:'',
    redirectTo:'home-page',
    pathMatch:'full'

  },
  
  {
    path:'home-page',
    component:HomeComponent
  },
  {
    path:'user-edit',
    component:UsereditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsereditComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes,{

    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
