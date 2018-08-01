import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpHeaders } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders({
            'fekry': 'el boss',
            'Content-Type': 'application/json'
          });
        var dupReq = req.clone({headers});
        return next.handle(dupReq);
    }
};
@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
    ]
})
export class InterceptorModule { }