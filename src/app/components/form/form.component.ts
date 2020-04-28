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
  // americavalue : boolean = false;
  city: boolean = false;
  cityusa:boolean = false;
  reject:boolean = false;
  rejectusa:boolean = false;
  nation;
  india;
  constructor() {
    this.userForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'Password': new FormControl(),
      'Gender': new FormControl(),
      'status':new FormControl(),
      'favcolour': new FormArray([
        new FormGroup({
          'yellow': new FormControl()
        }),
        new FormGroup({
          'white': new FormControl()
        }),
      ]),
      'nation': new FormControl(1),
      'india': new FormControl(1),
    });
    this.userForm.get("nation").valueChanges.subscribe(data =>{
      if(data == "india"){
        this.num = true;
        this.userForm.addControl("india", new FormControl(1));
        this.userForm.removeControl("american");
      }
      else{
        this.num = false;
        this.userForm.addControl("american", new FormControl(1));
        this.userForm.removeControl("india");
      }
    });
    this.userForm.get("india").valueChanges.subscribe(data =>{
      if(data == "Tamilnadu") {
        this.value = true;
        this.userForm.addControl("Tamilnadu", new FormControl(1));
        this.userForm.removeControl("kerala");
      }
      else{
        this.value = false;
        this.userForm.addControl("kerala", new FormControl(1));
        this.userForm.removeControl("Tamilnadu");
      }
    });
    // this.userForm.get("india").valueChanges.subscribe(data =>{
    //   if(data == "Tamilnadu") {
    //     this.americavalue = true;
    //     this.userForm.addControl("Tamilnadu", new FormControl(1));
    //     this.userForm.removeControl("kerala");
    //   }
    //   else{
    //     this.americavalue = false;
    //     this.userForm.addControl("kerala", new FormControl(1));
    //     this.userForm.removeControl("Tamilnadu");
    //   }
    // });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
}
}
