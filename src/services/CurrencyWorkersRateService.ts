import amqp from "amqplib/callback_api";
import { CurrencyLatestService } from "../services/CurrencyLatestService";
import { SearchCurrencyLatest } from "../models/SearchCurrencyLatest";

export class CurrencyWorkersRateService {

  private CurrencyLatestService: CurrencyLatestService;

  constructor() {
    const SearchExchangeRateLatest = new SearchCurrencyLatest();
    this.CurrencyLatestService = new CurrencyLatestService(SearchExchangeRateLatest);
  }

  async GetNotificationExchangeRate(): Promise<any> {
   

  };
}
