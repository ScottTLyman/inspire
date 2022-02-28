import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template

}
export class WeatherController {
  constructor() {
    ProxyState.on('weather', _drawWeather)
    ProxyState.on('weather', this.getScale)
    console.log('weather controller');
    this.getWeather()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }
  getScale() {
    if (ProxyState.tempScale == null) {
      ProxyState.tempScale = "°C"
    }
    weatherService.scaleToggle(ProxyState.tempScale)
  }
}