import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  private userId;
  private user;
  private apiUrl: string = 'http://jsonplaceholder.typicode.com/users/';

  constructor( 
    private service: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(response => this.userId = response.id);
    this.service.getData(this.apiUrl + this.userId).subscribe(response => this.user = response);
  }

}
