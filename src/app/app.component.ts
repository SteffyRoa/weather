import { Component, OnInit} from '@angular/core';
import { WeatherService } from './service/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})



export class AppComponent implements OnInit {


 weather: any;
  constructor(private weatherService: WeatherService) {

  }
  //almacena datos temporal
 


  ngOnInit(): void {
  }


  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(

        //mostrar en consola
       res =>{this.weather = res},
       // res=> console.log(res),
        err => console.log(err)
      )


  }
  //OTRA FUNCION 
  //funcion submit location      //autocompletado HTMLINputElement
  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    this.getWeather(cityName.value, countryCode.value);//mostrar por consola
    countryCode.value = '';//limpiar 
    cityName.value = ``;//limpiar
    cityName.focus();//se enfoque

    return false;
  }

}
