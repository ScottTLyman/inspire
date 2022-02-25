import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {

}
export class WeatherController {
  constructor() {
    console.log('weather controller');
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }
}