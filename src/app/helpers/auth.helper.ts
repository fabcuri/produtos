import { Injectable } from "@angular/core";

@Injectable({
providedIn: 'root'
})
export class AutoHelper{

    isAutebticated():boolean{
        return localStorage.getItem('login_usuario') !=null &&
        localStorage.getItem('access_token') !=null;
        
    }
}
