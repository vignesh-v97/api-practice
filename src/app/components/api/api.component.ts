import { ApiService } from './../../service/api.service'
import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  countries;
  constructor(
    private ApiService: ApiService,
  ) { }

  ngOnInit() {
    // this.countries = this.ApiService.getCountries();
  }
  getdata = () =>{
    this.ApiService.getCountries().subscribe((country: {}) => {
      this.countries = country;
    });
  }
  getNature = (countryName) => {
    this.ApiService.getweather(countryName).subscribe((data: api) => {
      alert(data.main.temp);
  });
  }
}