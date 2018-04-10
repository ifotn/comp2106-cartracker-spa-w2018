import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
const globals = require( '../../../../config/globals');

let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

@Injectable()
export class CarService {

  // method to create an instance of our service
  constructor(private http: HttpClient) {
  }

  // GET - retrieve all cars from API
  getCars() {
    return this.http.get(globals.apiServer + 'cars');
  }

  // POST - add a new car through the API
  addCar(newCar) {
    return this.http.post(globals.apiServer + 'cars', newCar, { headers: headers });
  }
}
