import { SearchCurrencyLatest } from "../models/SearchCurrencyLatest";
import { CurrencyLatestService } from "../services/CurrencyLatestService";

export class CurrencyLatestController {
  private currencyLatestService: CurrencyLatestService;

  constructor() {
    const SearchExchangeRateLatest = new SearchCurrencyLatest();
    this.currencyLatestService = new CurrencyLatestService(SearchExchangeRateLatest);
  }

  async handleRequestHistory({ req, res }: any) {
    const { currency } = req.body;
    try {
      const ExchangeRate = await this.currencyLatestService.getExchangeRateLatest(currency)
      res.json({ ExchangeRate })
    } catch (error) {
      console.log(error)
      res.status(500).json({ "message": "Error fetching api" })
    }
  }
}