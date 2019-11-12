import { Component, OnInit } from "@angular/core";
import { ServiceApi } from 'src/service1/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector:'edit-page',
    templateUrl:'user-edit.component.html',
    styleUrls:['user-edit.component.css']
})
export class UserEditComponent implements OnInit{

   id;
   users;
   uid;
   uname;
   uemail;
   ucity;
   json;
   

   private data={
     name:null,
     email:null,
     id:null,
     city:null
   }


  constructor (private activatedRoute: ActivatedRoute,private serice:ServiceApi) { }

  ngOnInit() {
    var that = this;
    this.activatedRoute.params.subscribe(function (res){
        // console.log(res)
      that.id = res.id;
      // console.log(that.id )
    })
    this.serice.fetchUsersView(that.id).subscribe(function(res){
        // console.log(res );
            
          that.users=res;
          console.log(this.users );
          })

  }

  updateId(event:any){
    var uid=event.target.value;
    this.uid=uid;
    console.log(this.uid);
  }

  updateName(event:any){
    var uname=event.target.value;
    this.uname=uname;

  }

  updateEmail(event:any){
    var uemail=event.target.value;
    this.uemail=uemail;
  }

  updateCity(event:any){
    var ucity=event.target.value;
    this.ucity=ucity;
  }

  update1(){
    this.json={
      "id":this.uid,
      "name":this.uname,
      "email":this.uemail,
      "city":this.ucity
   }

   console.log(this.json);

  }
  
  update(key,event){

    if(key=='name')
    this.data.name=event.target.value;
    
    else if(key=='id')
    this.data.id=event.target.value;

    else if(key=='email')
    this.data.email=event.target.value;

    else if(key=='city')
    this.data.city=event.target.value;

    console.log(this.data);


  }

  
    


  
  
  

}
