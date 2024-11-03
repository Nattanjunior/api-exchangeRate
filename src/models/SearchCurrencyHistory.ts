import type { CurrencyHistoryProps, CurrencyHistoryRules } from "../interfaces/CurrencyHistoryRules";

export const apiKey = '5690198e76fb65359227a7be';

export class SearchCurrencyHistory implements CurrencyHistoryRules {

  async ExchageRateHistory({ currency, year, month, day }: CurrencyHistoryProps): Promise<number> {
    // busca taxas de câmbio historica
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/history/${currency}/${year}/${month}/${day}`);

    const data = await response.json();
    // console.log(data);
    return data
  }
}