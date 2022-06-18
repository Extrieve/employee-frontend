import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-fetch-employee',
  templateUrl: './fetch-employee.component.html',
  styleUrls: ['./fetch-employee.component.css']
})
export class FetchEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id!: number;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    }, error => console.log(error));
  }

  public onSubmit(){
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    })
  }

}
