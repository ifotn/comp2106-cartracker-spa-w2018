import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent} from "../components/car.component";
import { AutosComponent } from '../components/autos/autos.component';
import { AutoService} from "./services/auto.service";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, CarComponent, AutosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [AutoService],
  bootstrap: [AutosComponent]
})
export class AppModule { }
