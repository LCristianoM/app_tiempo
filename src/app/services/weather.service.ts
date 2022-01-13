import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '6f99b947dad9e2a6664f92e89f4cd27a';
  URI: string= '';

  constructor(private httpCliente: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(cityName: string, countryCode: string){
    return this.httpCliente.get(`${this.URI} ${cityName}, ${countryCode}`);
  }
}