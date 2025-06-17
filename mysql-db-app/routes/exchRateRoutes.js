// const express = require("express");
import express from "express";
import { exchRateController } from "../controllers/index.js";
const router = express.Router();

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  exchRateController.getExchRates(res);
});
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
  exchRateController.createExchRate(req.body, res);
});
// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  exchRateController.updateExchRate(req, res);
});
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:id", (req, res) => {
  exchRateController.deleteExchRate(req, res);
});

export default router;
