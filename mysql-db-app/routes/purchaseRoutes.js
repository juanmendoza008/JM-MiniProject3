// const express = require("express");
import express from "express";
import { purchaseController } from "../controllers/index.js";
const router = express.Router();

// matches GET requests sent to /api/purchase
// (the prefix from server.js)
router.get("/", (req, res) => {
  purchaseController.getPurchases(res);
});

// get Purchase by user
router.get("/by-user/:userID", (req, res) => {
  purchaseController.getPurchaseByUser(req, res);
});
// get Purchase by Account
router.get("/by-account/:accountID", (req, res) => {
  purchaseController.getPurchaseByAccount(req, res);
});
// get Purchase by exchRate
router.get("/by-exchRate/:exchRateID", (req, res) => {
  purchaseController.getPurchaseByExchRate(req, res);
});

// matches POST requests sent to /api/purchase/
router.post("/", (req, res) => {
  purchaseController.createPurchase(req.body, res);
});
// matches PUT requests to /api/Posts/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  purchaseController.updatePurchase(req, res);
});

export default router;
