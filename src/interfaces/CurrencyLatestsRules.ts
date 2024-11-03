export interface CurrencyLatestRules {
  ExchageRateLatest(base_currency: string): Promise<object>;
}