import type { CurrencyLatestRules } from "../interfaces/CurrencyLatetsRules";
import { apiKey } from "./SearchCurrencyHistory";


export class SearchCurrencyLatest implements CurrencyLatestRules {
  // busca taxas de câmbio recentes
  async ExchageRateLatest(currency: string): Promise<number> {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`);

    if(!response.ok){
      throw new Error(`Error fetching exchange rate: ${response.statusText}`)
    }

    const data = await response.json();
    console.log(data);
    return data.conversion_rates[currency];
  }
}