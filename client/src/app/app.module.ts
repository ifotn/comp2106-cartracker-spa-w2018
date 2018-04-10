import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';

// reference cars service
import { CarService } from "./services/car.service";

@NgModule({
  declarations: [
    AppComponent, CarsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [CarService],
  bootstrap: [CarsComponent]
})
export class AppModule { }
