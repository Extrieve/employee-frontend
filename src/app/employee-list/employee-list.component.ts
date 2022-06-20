import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  search: string = "";

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  public onInput(firstName: string){
    this.search = firstName;
    console.log(this.search);
  }

  public onSearchSubmit(){
    this.getEmployeeByFirstName(this.search);
    console.log(this.employees);
  }

  public getEmployeesList(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  public getEmployeeByFirstName(firstName: string){
    this.employeeService.getEmployeeByFirstName(firstName).subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    })
  }

  public updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  public getEmployeeById(id: number){
    this.router.navigate(['employees', id]);
  }

  public deleteEmployeeById(id: number){
    this.router.navigate(['delete-employee', id]);
  }

}
