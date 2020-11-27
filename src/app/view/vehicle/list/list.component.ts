import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { VehicleService } from './../../../services/vehicle.service';
import { Vehicle } from './../../../models/vehicle';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router, private vehicleService: VehicleService) { }

  vehiclesColumns: string[] = ["id", "modelo", "placa", "ano", "cadastrado"];

  vehicles: Vehicle[] = [];

  vehiclesTable: MatTableDataSource<Vehicle> =
    new MatTableDataSource<Vehicle>(
      this.vehicles
    );

  ngOnInit(): void {
    this.vehicleService.list().subscribe((list) => {
      this.vehicles = list;
      this.vehiclesTable = new MatTableDataSource<Vehicle>(this.vehicles);
    });
  }

}
