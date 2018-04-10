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
  _id: string;

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

  // delete a car using its _id
  deleteCar(_id): void {
    if (confirm('Are you sure???')) {
      this.carService.deleteCar(_id).subscribe(response => {
        this.getCars();
      });
    }
  }

  // update a car
  updateCar(): void {
    let car = {
      _id: this._id,
      make: this.make,
      model: this.model,
      year: this.year,
      colour: this.colour
    };

    this.carService.updateCar(car).subscribe(response => {
      this.getCars();
      this.clearForm();
    });
  }

  clearForm(): void {
    this.make = null;
    this.model = null;
    this.year = null;
    this.colour = null;
    this._id = null;
  }

  selectCar(car): void {
    this.make = car.make;
    this.model = car.model;
    this.year = car.year;
    this.colour = car.colour;
    this._id = car._id;
  }

  ngOnInit() {
    this.getCars();
  }

}
