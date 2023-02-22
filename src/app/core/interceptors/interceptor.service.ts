import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

environment;
@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    constructor() {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let headers: HttpHeaders;
        const API_URL = environment.API_URL;

        // headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json, text/plain',
        // });

        const REQ_CLONE = req.clone();
        return next.handle(REQ_CLONE).pipe(catchError(this.manejarError));
    }
    manejarError(error: HttpErrorResponse) {
        console.error(error);
        return throwError(error.error);
    }
}
