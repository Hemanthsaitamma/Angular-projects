import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  constructor(private router: Router) { }
  response:any;
  
  ngOnInit() {
    var that =this;
    $.ajax({
      method:"GET",
      url:"https://jsonplaceholder.typicode.com/users",
      success:function(res){
        that.getusers(res);
        console.log(res);
      }

    })
    
  }
  getusers(data){
    this.response=data;
  }

  gotoEdit($event) {
    this.router.navigate(['user_edit/:id']);
  }
}
