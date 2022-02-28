export class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.condition = data.weather[0].icon
  }

  get Template() {
    return `
    <h5 class="text-light p-2">${this.name} | <span id="temp" onclick="app.weatherController.getScale()"></h5>

    `
  }
}