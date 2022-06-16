import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//tarves del metodo get p[ost]
export class WeatherService {

URI: string = '';

apiKey = '8f043d061c608364f9baaa8b02f6848a';

  //instanciar con un modificador
  constructor(private http: HttpClient) {
    //units=metric grados celsius
this.URI= `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`

//sdos parametros ciudad y pais
}
//metodo obtener clima
getWeather(cityName: string , countryCode: string){

  return this.http.get(`${this.URI}${cityName},${countryCode}`);

   }
  }
