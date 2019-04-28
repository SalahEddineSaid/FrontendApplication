import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navconsultant',
  templateUrl: './navconsultant.component.html',
  styleUrls: ['./navconsultant.component.css']
})
export class NavconsultantComponent implements OnInit {

  info: any;
  constructor(public router:Router,private token: TokenStorageService) { }
  roleuser="ROLE_USER";
  
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