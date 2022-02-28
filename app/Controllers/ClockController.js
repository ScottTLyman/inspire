export class ClockController {
  constructor() {
    this.drawClock()
    this.startClock()
  }
  drawClock() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let period = "am"
    if (hours == 0) {
      hours = 12
    } else if (hours == 12) {
      period = "pm"
    } else if (hours > 12) {
      hours = hours - 12
      period = "pm"
    }
    // @ts-ignore
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let clock = hours + ":" + minutes + period
    document.getElementById('clock').innerText = clock
  }
  startClock() {
    setInterval(this.drawClock, 1000)
  }
}