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

  // DELETE - pass id as part of the url parameter and delete
  deleteCar(_id) {
    return this.http.delete(globals.apiServer + 'cars/' + _id, { headers: headers });
  }

  // PUT - pass the id and the updated car and save
  updateCar(car) {
    return this.http.put(globals.apiServer + 'cars/' + car._id, car, { headers: headers });
  }

}
