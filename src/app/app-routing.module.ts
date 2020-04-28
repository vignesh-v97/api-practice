import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: '', component: ApiComponent },
  {
    path: "form",
    children: [
      {
        path: "",
        component: FormComponent
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
