import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Vehicle } from "./../models/vehicle"
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseURL = "http://localhost:1234";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  list(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseURL}/carro/listar/`);
  }

  create(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.baseURL}/carro/cadastrar/`, vehicle);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
