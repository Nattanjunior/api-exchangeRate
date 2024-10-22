import { SearchCurrencyLatest } from "../models/SearchCurrencyLatest";
import { CurrencyRateService } from "../services/CurrencyRateService";
import { CurrencyWorkersRateService } from "../services/CurrencyWorkersRateService";


const notification = new CurrencyRateService();

export class CurrencyLatestController {
  private CurrencyWorkersRateService: CurrencyWorkersRateService;

  constructor() {
    const SearchExchangeRateLatest = new SearchCurrencyLatest();
    this.CurrencyWorkersRateService = new CurrencyWorkersRateService(SearchExchangeRateLatest);
  }

  async handleRequestHistory({ req, res }: any) {
    const { currency, userId } = req.body;
    try {
      notification.PublishNotificationExchangeRateRequest(currency);
      const ExchangeRate = await this.CurrencyWorkersRateService.GetNotificationExchangeRate(); 

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