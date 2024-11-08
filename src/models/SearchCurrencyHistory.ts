import type { CurrencyHistoryProps, CurrencyHistoryRules } from "../interfaces/CurrencyHistoryRules";

export const apiKey = '5690198e76fb65359227a7be';

export class SearchCurrencyHistory implements CurrencyHistoryRules {

  private validDate(date: string): boolean {
    const verifyDate = /^\d{4}-\d{2}-\d{2}$/;
    return verifyDate.test(date);

  }
  async ExchageRateHistory({ date }: CurrencyHistoryProps): Promise<object> {
    // busca taxas de câmbio historica

    if (!this.validDate(date)) {
      throw new Error("Data inválida. O formato correto é 'YYYY-MM-DD'.");
    }
    
    const response = await fetch(`https://openexchangerates.org/api/historical/${date}.json?app_id=57931712f85b4209a8fd2ccec7520776`);

    const data = await response.json();
    console.log(data);
    return data
  }
}