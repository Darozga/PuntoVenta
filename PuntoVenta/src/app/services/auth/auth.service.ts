import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrlController: string =`${environment.API_URL }/api/Users/login`;
  private loggedIn: Subject<boolean> = new Subject<boolean>;

  constructor(private http: HttpClient, private router: Router) { }


  getLoginStatus ():Observable<boolean>{
    return this.loggedIn;  
  }


  login(authData: User):Observable<any>{
    return this.http.post<any>(this.apiUrlController, authData).pipe(
      map((res: any) => {
        if (res){
          localStorage.setItem('user', JSON.stringify(authData));
        }
        this.setLoginStatus();
        return res;
      })
    )
    
  }

  setLoginStatus() {
    if(localStorage.getItem('user') != null){
      return this.loggedIn.next(true);
    }else{
      return this.loggedIn.next(false);
    }
    
}

  logout():void{
    localStorage.removeItem('user');
    this.setLoginStatus();
    this.router.navigate(['']);
  }

}
