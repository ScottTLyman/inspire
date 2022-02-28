import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { api } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    // @ts-ignore
    const res = await api.get('quotes/')
    console.log(res.data, 'get quotes');
    ProxyState.quote = new Quote(res.data)
  }

}

export const quotesService = new QuotesService()