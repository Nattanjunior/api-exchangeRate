import { SearchCurrencyLatest } from "../models/SearchCurrencyLatest";
import { CurrencyLatestService } from "../services/CurrencyLatestService";
import { CurrencyRateService } from "../services/CurrencyRateService";


const notification = new CurrencyRateService();

export class CurrencyLatestController {
  private currencyLatestService: CurrencyLatestService;

  constructor() {
    const SearchExchangeRateLatest = new SearchCurrencyLatest();
    this.currencyLatestService = new CurrencyLatestService(SearchExchangeRateLatest);
  }

  async handleRequestHistory({ req, res }: any) {
    const { currency, userId } = req.body;
    try {
      const ExchangeRate = await this.currencyLatestService.getExchangeRateLatest(currency);

      if (!ExchangeRate) {
        console.log("Error fetching exchange rate")
        res.status(404).json({ "message": "Exchange rate not found" })
      };
      res.json({ ExchangeRate });

      const message = `The exchange rate for ${currency} has been successfully retrivied.`;
      notification.PublishNotificationExchangeRateRequest(currency);

    } catch (error) {
      console.log(error)
      res.status(500).json({ "message": "Error fetching api" })
    }
  }
}