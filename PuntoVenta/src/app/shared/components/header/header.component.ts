import { Component, OnInit } from '@angular/core';
import { map, observable, Observable, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean | undefined;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    
    
    this.authSvc.getLoginStatus().subscribe((res) =>{
      
      this.isLogged = res;
    });
    this.authSvc.setLoginStatus();

  }


  onLogout():void {
    this.authSvc.logout();
  }

  validarUsuario():boolean{
    if(localStorage.getItem('user') != null){
      return false
    }else{
      return true
    }
  }

}
