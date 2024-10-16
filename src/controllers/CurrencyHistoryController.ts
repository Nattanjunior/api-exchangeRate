import { SearchCurrencyHistory } from "../models/SearchCurrencyHistory";
import { CurrencyHistoryService } from "../services/CurrencyHistoryService";

export class CurrencyHistoryController {
  private currencyHistoryService: CurrencyHistoryService;

  constructor() {
    const SearchExchangeRateHistory = new SearchCurrencyHistory();
    this.currencyHistoryService = new CurrencyHistoryService(SearchExchangeRateHistory)
  }

  async handleRequestHistory({ req, res }: any) {
    const { currency, year, month, day } = req.body;
    try {
      const ExchangeRate = await this.currencyHistoryService.getExchangeRateHistory({ currency, year, month, day })
      res.json({ ExchangeRate })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Error fetching api" })
    }
  }
}