import { OnInit, Component } from '@angular/core';
import { Router} from  '@angular/router'
import * as $ from 'jquery'


@Component({
    selector:'table-page',
    templateUrl:'table.component.html',
    styleUrls:['table.component.css']
})

export class TableComponent implements OnInit{

     response:any;
     constructor(private router:Router){}
     title='pro3';
     ngOnInit(){
         var that=this;

         $.ajax({
             method:"GET",
             url:"https://jsonplaceholder.typicode.com/users",
             success:function(res){
                 that.gotoEditform(res);
             }
         });
     }
     gotoEditform(data){
         this.response=data;
         this.router.navigate(['edit-form']);
     }


}