// const express = require("express");
import express from "express";
import { transactionTypeController } from "../controllers/index.js";
const router = express.Router();

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  transactionTypeController.getTransactionTypes(res);
});
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
  transactionTypeController.createTransactionType(req.body, res);
});
// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  transactionTypeController.updateTransactionType(req, res);
});
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:id", (req, res) => {
  transactionTypeController.deleteTransactionType(req, res);
});

export default router;
