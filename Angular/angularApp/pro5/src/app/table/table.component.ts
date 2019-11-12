import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  users;
  private name:string='';
  

  constructor( private serve:ApiService) {
    this.getuser()
   }
    
 getuser(){
   var that = this;
   this.serve.fetchuser().subscribe(function(res){
     that.users=res;
     that.serve.masterData=res;
    that.callme();
   })
 }
 callme(){
  console.log(this.users);
}
 
 
 
 

 clickhere(event:any){
   
   var enteredData=event.target.value;
  if(enteredData)
   this.users=this.serve.masterData.filter(function(val,ind){ //here we can use this.users or this.serve.masterData
     return val.name.indexOf(enteredData)!=-1;
   })
   else{
     this.users=this.serve.masterData;
   }

   
   

 }

}
