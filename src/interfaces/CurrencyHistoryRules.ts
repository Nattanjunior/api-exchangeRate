export interface CurrencyHistoryProps {
  currency: string;
  year: number;
  month: number;
  day: number;
}

export interface CurrencyHistoryRules {
  ExchageRateHistory({ currency, year, month, day }: CurrencyHistoryProps): Promise<number>;
}