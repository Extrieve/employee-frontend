import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  private getEmployeesList(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  // private createEmployee(employee: Employee){
  //   this.employeeService.createEmployee(employee).subscribe(data => {
  //     this.employees.push(data);
  //   });
  // }
}
