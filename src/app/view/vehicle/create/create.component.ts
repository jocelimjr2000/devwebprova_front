import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleService } from "src/app/services/vehicle.service";
import { Vehicle } from "src/app/models/vehicle";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();

  modelo: string;
  placa: string;
  ano: number;

  constructor(
    private service: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.vehicle.modelo = this.modelo;
    this.vehicle.placa = this.placa;
    this.vehicle.ano = this.ano;

    this.service.create(this.vehicle).subscribe(
      (result) => {
        this.router.navigate([""]);
      },
      (error) => {
        if (error.status === 403) {
          this.service.showMessage("Placa já cadastrada");
        } else {
          this.service.showMessage("Verifique os dados preenchidos");
        }
      }
    );
  }
}
