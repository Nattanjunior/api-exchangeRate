import { CurrencyLatestRules } from "../interfaces/CurrencyLatestsRules";

export class CurrencyLatestService {
  constructor(private CurrencyLatestRules?: CurrencyLatestRules) { }

  async getExchangeRateLatest(base_currency: string ) {
    return this.CurrencyLatestRules?.ExchageRateLatest(base_currency);
  }
}