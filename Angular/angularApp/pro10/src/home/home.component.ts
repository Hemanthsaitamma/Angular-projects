import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({
    selector:'app-home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})
export class HomeComponent{
    
    @Output()
    public triggerRename:EventEmitter<any>=new EventEmitter<any>()

    @Output()
    public triggerReset:EventEmitter<any>=new EventEmitter<any>()

    RenameHere(){
        this.triggerRename.emit();
    }
    ResetHere(){
        this.triggerReset.emit();
    }
    



}