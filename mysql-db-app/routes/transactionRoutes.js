// const express = require("express");
import express from "express";
import { transactionController } from "../controllers/index.js";
const router = express.Router();

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  transactionController.getTransactions(res);
});

// get Transaction by user
router.get("/by-user/:userID", (req, res) => {
  transactionController.getTransactionByUser(req, res);
});
// get Transaction by Account
router.get("/by-account/:accountID", (req, res) => {
  transactionController.getTransactionByAccount(req, res);
});
// get Transaction by Account
router.get("/by-transactionType/:transactionTypeID", (req, res) => {
  transactionController.getTransactionByTransactionType(req, res);
});

// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
  transactionController.createTransaction(req.body, res);
});
// matches PUT requests to /api/Posts/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  transactionController.updateTransaction(req, res);
});

export default router;
