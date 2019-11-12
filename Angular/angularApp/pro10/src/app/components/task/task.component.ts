import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private router: Router) { }

  validateLogin($event, username, password) {

    $event.preventDefault();

    if(!username || !password)
      return false;
    else if( username.value.length >= 1 && password.value.length >= 1 ) {
      this.router.navigate(['home']);
    }
  }

}
