import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote() {
  let quote = ProxyState.quote
  document.getElementById('quote').innerHTML = quote.Template
}

export class QuotesController {
  constructor() {
    console.log('quotes controller');
    ProxyState.on('quote', _drawQuote)
    this.getQuote()
  }
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }

}

