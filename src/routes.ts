import express from "express";
import { CurrencyHistoryController } from "./controllers/CurrencyHistoryController";
import { CurrencyLatestController } from "./controllers/CurrencyLatestController";

const CurrencyController = new CurrencyHistoryController();
const CurrencyLatest = new CurrencyLatestController();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "hello wolrd" })
})

router.post("/ExchangeRateHistory", (req, res) => CurrencyController.handleRequestHistory({ req, res }))

router.post("/ExchangeRateLatest", (req, res) => CurrencyLatest.handleRequestHistory({ req, res }))

export default router