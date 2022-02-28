import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  quotesController = new QuotesController();
  weatherController = new WeatherController();
  imagesController = new ImagesController();
  todoController = new TodoController();
  clockController = new ClockController();
}

window["app"] = new App();
