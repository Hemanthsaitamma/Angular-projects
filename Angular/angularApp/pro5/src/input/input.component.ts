import { Component } from "@angular/core";

@Component({
    selector:'input-page',
    templateUrl:'input.component.html',
    styleUrls:['input.component.css']
})
export class InputComponent{
   private name:string='';
    handleNamechange(data){
        var user=data.target.value;
        this.name=user;
    }
}