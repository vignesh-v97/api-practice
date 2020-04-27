import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}