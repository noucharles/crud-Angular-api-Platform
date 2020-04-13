import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users) => {this.users = users['hydra:member'];
                  console.log('utilisateurs', this.users);
      }, (error) => {
        alert(`Probléme d'accés à l'api`);
      }
    );
  }

  createUser() {
        const link = ['addUser'];
        this.router.navigate(link);
  }
}
