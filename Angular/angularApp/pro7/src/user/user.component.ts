import { Component } from "@angular/core";

@Component({
    selector:'user-app',
    templateUrl:'user.component.html',
    styleUrls:['user.component.css']
})
export class UserComponent{
    public firstname="hemanth";
    public lastname="saitamma";
    public email="hemanthsaitamma555@gmail.com";
    public phoneno="6305632250";


    SaveHere(){
        var json=[{
            "firstname":this.firstname,
            "lastname":this.lastname,
            "email":this.email,
            "phoneno":this.phoneno
        }]
        console.log(json);
    }
    CancelHere(){
        this.firstname="";
        this.lastname="";
        this.email="";
        this.phoneno="";
    }
}