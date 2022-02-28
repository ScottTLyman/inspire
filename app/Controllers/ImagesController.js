import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawImage() {
  let bgImg = ProxyState.image
  document.getElementById('bg-image').style.backgroundImage = `url(${bgImg.url})`
  document.getElementById('bg-image').style.backgroundSize = "cover"
}
export class ImagesController {
  constructor() {
    this.getImage()
    console.log('images controller');
    ProxyState.on('image', _drawImage)
  }
  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }
}