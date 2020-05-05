import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { FormComponent } from './components/form/form.component';
import { StudentTableComponent } from './components/student-table/student-table.component';


const routes: Routes = [
  { path: 'user', component: ApiComponent },
  { path: '', component: FormComponent },
  { path: 'view-list', component:StudentTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
