import { Component, OnInit, NgModule } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  rowdatas;
  id;
  constructor( public apiService : ApiService, public route: Router ) {  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents = () => {
    this.apiService.getStudents().subscribe((rowdata) => {
      this.rowdatas = rowdata;
      console.log(rowdata);
    });
  }
  viewDetail(data) {
    console.log(data);

  }
}
