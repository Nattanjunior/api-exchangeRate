export interface CurrencyHistoryProps {
  date: string
}

export interface CurrencyHistoryRules {
  ExchageRateHistory({ date}: CurrencyHistoryProps): Promise<object>;
}