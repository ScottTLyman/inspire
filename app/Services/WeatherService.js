import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { api } from "./AxiosService.js"

class WeatherService {
  async getWeather() {
    const res = await api.get('weather/')
    console.log(res.data, 'get weather');
    ProxyState.weather = new Weather(res.data)
  }
  scaleToggle(tempScale) {
    if (tempScale == "°C") {
      ProxyState.tempScale = "°F"
      this.tempF(ProxyState.tempScale)
    } else {
      ProxyState.tempScale = "°C"
      this.tempC(ProxyState.tempScale)
    }
  }
  tempF(tempScale) {
    let tempNow = ProxyState.weather.temp
    let tempF = Math.floor((tempNow - 273.15) * 1.8) + 32
    document.getElementById('temp').innerText = tempF + tempScale
  }
  tempC(tempScale) {
    let tempNow = ProxyState.weather.temp
    let tempC = Math.floor(tempNow - 273.15)
    document.getElementById('temp').innerText = tempC + tempScale
  }
}

export const weatherService = new WeatherService()