import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProvinciasService {
    private requestUrl = 'https://apis.datos.gob.ar/georef/api/provincias';
    constructor(private http: HttpClient) {}

    find(param: string): Observable<any> {
        return this.http.get(`${this.requestUrl}` + `?nombre=` + param, {observe: 'response' });
    }
    findAll(): Observable<any> {
        return this.http.get(`${this.requestUrl}`, {observe: 'response'});
    }
}
