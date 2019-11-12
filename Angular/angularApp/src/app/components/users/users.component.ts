import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: any;
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private service: DataService) { }

  ngOnInit() {
  }

  getUsers() {
    this.service.getData(this.apiUrl).subscribe(response => this.users = response);
  }
}
