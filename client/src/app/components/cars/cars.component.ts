import { Component, OnInit } from '@angular/core';
import { CarService} from "../../services/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carService: CarService) { }

  // create property to hold list of cars
  cars: any;
  make: string;
  model: string;
  year: number;
  colour: string;

  // list all cars by calling the service
  getCars(): void {
    this.carService.getCars().subscribe(response => {
      this.cars = response;
    })
  }

  // create a new car from the form data and pass to the service
  addCar(): void {
    let newCar = {
      make: this.make,
      model: this.model,
      year: this.year,
      colour: this.colour
    };

    this.carService.addCar(newCar).subscribe(response => {
      this.getCars();
      this.clearForm();
    });
  }

  clearForm(): void {
    this.make = null;
    this.model = null;
    this.year = null;
    this.colour = null;
  }

  ngOnInit() {
    this.getCars();
  }

}
