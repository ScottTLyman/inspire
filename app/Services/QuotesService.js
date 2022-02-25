import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class QuotesService {
  async getQuotes() {
    // @ts-ignore
    const res = await api.get('quotes/')
    console.log(res.data, 'get quotes');
    ProxyState.quotes = res.data.results
  }

}

export const quotesService = new QuotesService()