export interface CurrencyLatestRules{
  ExchageRateLatest(currency: string): Promise<number>;
}