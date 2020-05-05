import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray,Validators,ReactiveFormsModule} from "@angular/forms";
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm:FormGroup;

  constructor(public apiService:ApiService, public route:Router) {
    this.userForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'Gender': new FormControl("Male", Validators.required),
      'favFood': new FormArray([
        new FormGroup({
          'indian': new FormControl(true, Validators.required)
        }),
        new FormGroup({
          'chinese': new FormControl(false, Validators.required)
        }),
      ]),
      'addresses' : new FormArray([
          this.createAddress()
      ])
    });
  }

  createAddress() {
    return new FormGroup({
      'line1' : new FormControl('', Validators.required),
      'line2' : new FormControl('', Validators.required),
      'country' : new FormControl('', Validators.required),
      'state' : new FormControl('', Validators.required),
      'city' : new FormControl('', Validators.required)
    })
  }

  addAddress() {
    let addressArray = this.userForm.get('addresses') as FormArray;
    addressArray.push(this.createAddress())
  }

  removeAddress(index) {
    let address = this.userForm.get('addresses') as FormArray;
    address.removeAt(index);
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.apiService.submit(this.userForm.value).subscribe((data) => {
        alert('success');
      })
    }
  }

  open() {
    this.route.navigateByUrl(`/view-list`);
  }

  ngOnInit(): void {
  }
}
