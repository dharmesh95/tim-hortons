import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get("http://localhost:8080/getAll")
  }
}
