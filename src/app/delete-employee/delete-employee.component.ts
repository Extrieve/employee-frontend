import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  public onSubmit(){
    console.log(this.employee);
    this.employeeService.deleteEmployeeById(this.id).subscribe(data =>{
      this.employeeService.deleteEmployeeById(this.id);
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  public goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
