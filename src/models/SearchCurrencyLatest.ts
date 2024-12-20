import type { CurrencyLatestRules } from "../interfaces/CurrencyLatestsRules";
// import { apiKey } from "./SearchCurrencyHistory";

const apiKey = process.env.API_KEY;
console.log(apiKey)


export class SearchCurrencyLatest implements CurrencyLatestRules {
  // busca taxas de câmbio recentes
  async ExchageRateLatest(base_currency: string): Promise<object> {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base_currency}`);

    if (!response.ok) {
      throw new Error(`Error fetching exchange rate: ${response.statusText}`)
    }
    const data = await response.json();
    // console.log(typeof data);
    return data.conversion_rates;
  }
}