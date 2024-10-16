import type { CurrencyHistoryRules, CurrencyHistoryProps } from "../interfaces/CurrencyHistoryRules";

export class CurrencyHistoryService {
  constructor(private CurrencyHistoryRules: CurrencyHistoryRules) { }

  async getExchangeRateHistory({ currency, month, year, day }: CurrencyHistoryProps) {
    return this.CurrencyHistoryRules.ExchageRateHistory({ currency, year, month, day });
  }
}