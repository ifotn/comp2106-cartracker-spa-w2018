import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable()
export class CarService {

  // method to create an instance of our service
  constructor(private http: HttpClient) {
  }

  // GET - retrieve all cars from API
  getCars() {
    return this.http.get('http://localhost:3000/cars');
  }

}
