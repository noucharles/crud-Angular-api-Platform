import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addUser(formulaire: NgForm) {
    this.userService.addUser(formulaire.value).subscribe(
      (response) => {
        const link = ['home'];
        this.router.navigate(link);
      }, (error) => {
        alert('Probléme de connexion avec le serveur');
      }
    );
  }
}
