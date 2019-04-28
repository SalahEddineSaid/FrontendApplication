import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  info: any;
  constructor(public router:Router,private token: TokenStorageService) { }
  roleadmin="ROLE_ADMIN";
  
  rolemanager="ROLE_PM";

  
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
  

}
