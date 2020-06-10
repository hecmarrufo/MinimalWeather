import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private requestUrl = 'https://community-open-weather-map.p.rapidapi.com/find'
    private httpHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'x-rapidapi-key': 'a5cdef7134mshb81eb63ecff4fbep1ee69ejsnf02152f463ca'
      }
    constructor(private http: HttpClient) {}
    
    find(latitude:string, longitude:string): Observable<any>{
        return this.http.get(`${this.requestUrl}`, {
            headers: this.httpHeaders,
            params: {
                'lon':longitude,
                'lat':latitude
            }
        }); 
    }
}
