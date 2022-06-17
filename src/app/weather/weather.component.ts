import {Component} from "@angular/core";
import {IWeather} from "../interfaces/weather.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {

  // @ts-ignore
  data :IWeather = null;
  cityCode:string = 'hanoi';
  constructor(private service: WeatherService) {

  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.service.currentWeather(this.cityCode)
      .subscribe( value=>{
        this.data = value;
      })
  }

  hanoi(){
    this.cityCode='hanoi';
    this.getData();
  }
  london(){
    this.cityCode='london';
    this.getData();
  }
}
