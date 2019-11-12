import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro10';
  
  data1;
  
  
  RenameHere(){
    this.data1="VBM PRIME"
  }
  ResetHere(){
    this.data1="VBM GROUPS"
  }

}
