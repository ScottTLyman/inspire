import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js"

class ImagesService {
  async getImages() {
    const res = await api.get('images/')
    console.log(res.data, 'get image');
    ProxyState.images = res.data.results
  }

}

export const imagesService = new ImagesService()