import { SearchCurrencyLatest } from "../models/SearchCurrencyLatest";
import { CurrencyLatestService } from "../services/CurrencyLatestService"

// const notification = new CurrencyRateService();
export class CurrencyLatestController {
  private CurrencyLatestService: CurrencyLatestService

  constructor() {
    const SearchLatesteCurrency = new SearchCurrencyLatest();
    this.CurrencyLatestService = new CurrencyLatestService(SearchLatesteCurrency)
  }

  async handleRequestHistory({ req, res }: any) {
    const { base_currency } = req.body;
    try {
      // notification.PublishNotificationExchangeRateRequest(base_currency);
      const ExchangeRate = await this.CurrencyLatestService.getExchangeRateLatest(base_currency);

      if (!ExchangeRate) {
        console.log("Error: nada retornado");
        res.status(404).json({ message: "Taxa de câmbio não encontrada" }); 
        return;
      }

      res.json({ ExchangeRate });

    } catch (error) {
      console.log(error)
      res.status(500).json({ "message": "Error fetching api" })
    }
  }
}