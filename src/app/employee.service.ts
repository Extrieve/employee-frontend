import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:8080/api/v1/';
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl + 'employees');
  }

  getEmployeeByFirstName(name: string): Observable<Array<Employee>> {
    return this.httpClient.get<Array<Employee>>(this.baseUrl + 'employees/' + name);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post<Employee>(this.baseUrl + 'save', employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl + 'employee/' + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put<Employee>(this.baseUrl + 'update/' + id, employee);
  }

  deleteEmployeeById(id: number): Observable<Object>{
    return this.httpClient.delete<Employee>(this.baseUrl + 'delete/' + id);
  }
}
