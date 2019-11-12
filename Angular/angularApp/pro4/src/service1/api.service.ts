
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})

export class ServiceApi{
    private id:any;

    constructor(private http:HttpClient){
}

fetchUsers(){
    return   this.http.get("https://jsonplaceholder.typicode.com/users");
}

fetchUsersView(id){
    return  this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
}




}

