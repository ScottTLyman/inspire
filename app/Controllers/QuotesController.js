import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
function _drawQuotes() {

}

export class QuotesController {
  constructor() {
    console.log('quotes controller');
    ProxyState.on('quotes', _drawQuotes)
    this.getQuotes()
  }
  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }

}

