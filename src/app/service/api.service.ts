import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

getCountries() {
  return this.http.get('https://restcountries.eu/rest/v2/all');
}
getweather = (value) => {
  return this.http.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=3474420c02029ecacb9102080646d143`
  );
};

submit(data):Observable<any> {
  return this.http.post(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`,data)
}
}