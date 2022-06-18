import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FetchEmployeeComponent } from './fetch-employee/fetch-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employees/:id', component: FetchEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})], // Trace for debugging
  exports: [RouterModule]
})
export class AppRoutingModule { }
