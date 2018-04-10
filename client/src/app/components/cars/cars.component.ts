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

  // list all cars by calling the service
  getCars(): void {
    this.carService.getCars().subscribe(response => {
      this.cars = response;
    })
  }

  ngOnInit() {
    this.getCars();
  }

}
