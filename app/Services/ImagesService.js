import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { api } from "./AxiosService.js"

class ImagesService {
  async getImage() {
    const res = await api.get('images/')
    console.log(res.data, 'get image');
    ProxyState.image = new Image(res.data)
  }

}

export const imagesService = new ImagesService()