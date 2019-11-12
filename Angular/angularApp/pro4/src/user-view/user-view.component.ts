import { Component } from "@angular/core";
import { ServiceApi } from 'src/service1/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'view-page',
    templateUrl:'user-view.component.html',
    styleUrls:['user-view.component.css']
})
export class UserViewComponent{
    id;
    users;
 
 
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
 
    
   }
   
