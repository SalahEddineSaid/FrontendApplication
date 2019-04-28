import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 /* info: any;
  constructor(public router:Router,private token: TokenStorageService) { }
  
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    console.log("logout")
    this.router.navigate(['/auth/login']);
    
  }
*/
info: any;
constructor(public router:Router,private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log("token=="+this.token.getToken());
    
  }
}
