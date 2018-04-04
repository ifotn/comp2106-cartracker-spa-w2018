import { Component } from "@angular/core";
import {selector} from "rxjs/operator/publish";

@Component ({
  selector: 'car',
  templateUrl: './car.component.html'
})

// make public
export class CarComponent {
  title: 'Car Tracker SPA'
}
