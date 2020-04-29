import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray,Validators,ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm:FormGroup;
  num: boolean = false;
  value: boolean = false;
  americavalue : boolean = false;
  constructor() {
    this.userForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'Password': new FormControl(),
      'Gender': new FormControl(),
      'status':new FormControl(),
      'favcolour': new FormArray([
        new FormGroup({
          'Black': new FormControl()
        }),
        new FormGroup({
          'white': new FormControl()
        }),
      ]),
      'nation': new FormControl(1),
      'india': new FormControl(1),
      'americaState' : new FormControl(1)
    });
    this.userForm.get("nation").valueChanges.subscribe(data =>{
      if(data == "india"){
        this.num = true;
        this.userForm.addControl("india", new FormControl(1));
        this.userForm.removeControl("america");
      }
      else{
        this.num = false;
        this.userForm.addControl("america", new FormControl(1));
        this.userForm.removeControl("india");
      }
    });
    this.userForm.get("india").valueChanges.subscribe(data =>{
      if(data == "Tamilnadu") {
        this.value = true;
        this.userForm.addControl("TamilnaduCity", new FormControl(1));
        this.userForm.removeControl("kerala");
      }
      else{
        this.value = false;
        this.userForm.addControl("kerala", new FormControl(1));
        this.userForm.removeControl("TamilnaduCity");
      }
    });
    this.userForm.get("americaState").valueChanges.subscribe(data =>{
      if(data == "New-york") {
        this.americavalue = true;
        this.userForm.addControl("newyork-city", new FormControl(1));
        this.userForm.removeControl("California");
      }
      else{
        this.americavalue = false;
        this.userForm.addControl("California", new FormControl(1));
        this.userForm.removeControl("newyork-city");
      }
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
}
}
