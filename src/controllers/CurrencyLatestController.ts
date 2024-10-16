import { SearchCurrencyLatest } from "../models/SearchCurrencyLatest";
import { CurrencyLatestService } from "../services/CurrencyLatestService";
import { NotificationService } from "../services/NotificationService";


const notification = new NotificationService();

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
        console.log("rror fetching exchange rate")
        res.status(404).json({ "message": "Exchange rate not found" })
      };
      res.json({ ExchangeRate });

      const message = `The exchange rate for ${currency} has been successfully retrivied.`;
      notification.sendNotification(userId, message);

    } catch (error) {
      console.log(error)
      res.status(500).json({ "message": "Error fetching api" })
    }
  }
}