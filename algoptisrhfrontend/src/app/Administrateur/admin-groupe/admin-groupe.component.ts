import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
@Component({
  selector: 'app-admin-groupe',
  templateUrl: './admin-groupe.component.html',
  styleUrls: ['./admin-groupe.component.css']
})
export class AdmingroupeComponent implements OnInit {
  roleuser="ROLE_ADMIN";
  constructor(public router:Router,private token: TokenStorageService) { }
  info: any;
  ngOnInit() {


    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }




}
