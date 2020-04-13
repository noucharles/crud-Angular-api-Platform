import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-infos-user',
  templateUrl: './infos-user.component.html',
  styleUrls: ['./infos-user.component.css']
})
export class InfosUserComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  moreInfosUser() {
    const url = ['home', this.user.id];
    this.router.navigate(url);
  }

}
