import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{

    router = inject(Router)
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req: request header
        console.log("*******  INTERCEPTOR ********", this.router.url)

        const token = localStorage.getItem("access_token");
        
        const peticion = req.clone({
            setHeaders: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+token
            }
        })

        return next.handle(peticion).pipe(tap(() => {},
        
        (error: any) => {
            if(error instanceof HttpErrorResponse){
                // error: autenticación, autorization
                if(error.status !== 401){
                    return;
                }
                localStorage.removeItem("access_token");

                this.router.navigate(["/auth/login"]);

            }
        }

        ))
    }

}