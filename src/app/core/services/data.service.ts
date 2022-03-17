import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicesTypesModel } from '@models/services-types.model';
import { IRequestService } from '@interfaces/request-services.interfacte';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    urlApi: string = environment.API_URL;

    constructor(private http: HttpClient) {}

    public getServicesTypes(): Observable<ServicesTypesModel[]> {
        return this.http
            .get<ServicesTypesModel[]>(this.urlApi + 'getServicesTypes')
            .pipe(
                map((resp: any) => {
                    return resp.data;
                })
            );
    }

    public getRequestTypes(): Observable<ServicesTypesModel[]> {
        return this.http
            .get<ServicesTypesModel[]>(this.urlApi + 'getrequestTypes')
            .pipe(
                map((resp: any) => {
                    return resp.data;
                })
            );
    }

    public sendRequestServices(data: IRequestService): Observable<any> {
        return this.http.post<any>(this.urlApi + 'requestServices', data).pipe(
            map((resp: any) => {
                return resp.data;
            })
        );
    }
}
