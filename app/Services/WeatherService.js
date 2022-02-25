import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js"

class WeatherService {
  async getWeather() {
    const res = await api.get('weather/')
    console.log(res.data, 'get weather');
    ProxyState.weather = res.data.results
  }

}

export const weatherService = new WeatherService()