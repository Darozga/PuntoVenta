import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]

})
export class LoginComponent implements OnInit {
  public mformularioLogin: FormGroup;
  public username: FormControl;
  public password: FormControl;

  constructor(private formbuilder: FormBuilder, private messageService: MessageService, private authSvc: AuthService, private router: Router,) {
    this.username = new FormControl();
    this.password = new FormControl();
    this.mformularioLogin = this.formbuilder.group({
      username: this.username,
      password: this.password
    })
  }

  ngOnInit(): void {
  }
  onLogin(){
    var userData = {
      UserName: this.username.value,
      UserPassword: this.password.value
    } as User

    this.authSvc.login(userData).subscribe((res:boolean) =>{
      if(res){
        this.router.navigate(['/home'])
      }
      else{
        this.messageService.add({severity:'error', summary:'Datos Invalidos', detail:'La contraseña o el usuario son incorrectos', life:5000});

      }
    } );


  }

}
