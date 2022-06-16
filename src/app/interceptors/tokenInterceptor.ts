import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
        if(request.url.includes('api/produtos')){
            var accessToken= localStorage.getItem('access_token');
            request=request.clone({
                setHeaders:{Authorization: 'Bearer'+accessToken}
            })
        }
        return next.handle(request);
    }
}