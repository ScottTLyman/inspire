import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawImages() {

}
export class ImagesController {
  constructor() {
    console.log('images controller');
    ProxyState.on('images', _drawImages)
    this.getImages()
  }
  async getImages() {
    try {
      await imagesService.getImages()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }
}