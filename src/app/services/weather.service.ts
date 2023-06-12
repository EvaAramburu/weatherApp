import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI: string = '';
  constructor(private http: HttpClient) { 
    this.URI = 'https://api.open-meteo.com/v1/ecmwf?latitude=37.38&longitude=-5.97&hourly=temperature_2m'
  }

  getWeatherData(cityName: string) {
   return this.http.get(this.URI)
  }
}
