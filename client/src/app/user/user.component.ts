import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.userService.getUserById(params.id).subscribe(
              (data) => {
                 this.user = data;
            }, (error) => {
            alert('Probléme de connexion avec le serveur');
          }
        );
      }
    ); }

  supprimerUser() {
    this.userService.deleteUser(this.user.id).subscribe(
      (response) => {
        console.log('id', this.user.id);
        const link = ['home'];
        this.router.navigate(link);
      }, (error) => {
        console.log('id', this.user.id);
        alert('Probléme de connexion avec le serveur');
      }
    );
  }

  modifierUser(formulaire: NgForm) {
    console.log(formulaire.value);
    this.userService.updateUser(formulaire.value, this.user.id).subscribe(
      (response) => {
        console.log('id', this.user.id);
        const link = ['home'];
        this.router.navigate(link);
      }, (error) => {
        alert('Probléme de connexion avec le serveur');
      }
    );
  }

}
