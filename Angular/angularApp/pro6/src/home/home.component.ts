import { Component } from "@angular/core";
import { ServiceApi } from 'src/service1/api.service';
import { Router } from '@angular/router';

@Component({
    selector:'home-page',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})
export class HomeComponent {
    private users:any;
     id:any;
    constructor(private ser:ServiceApi,private r:Router){
        this.getuser()
    }
    getuser(){
        var that=this;
        this.ser.fetchUsers().subscribe(function(res){

    that.users=res;
    
    })
}
clickhere(user){
this.r.navigate(["/user-edit",user.id]);

}
clickhereforview(user){
    this.r.navigate(["/user-view",user.id]);
    
    }
}