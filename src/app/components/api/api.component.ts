import { ApiService } from './../../service/api.service'
import { Component, OnInit } from '@angular/core';

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
  getdata(){
    this.ApiService.getCountries().subscribe((country: {}) => {
      this.countries = country;
      this.countries.forEach((x) => {
        console.log(x.name);
        this.ApiService.getweather(x.name).subscribe((data) => {
          console.log(data);
        })
      });
    });
  }
  getNature() {
    alert('am clicked');
  }

}