// const express = require("express");
import express from "express";
import { accountController } from "../controllers/index.js";
const router = express.Router();

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  accountController.getAccounts(res);
});
// get Account by user
router.get("/by-user/:userID", (req, res) => {
  accountController.getAccountsByUser(req, res);
});
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
  accountController.createAccount(req.body, res);
});
// matches PUT requests to /api/Posts/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  accountController.updateAccount(req, res);
});
//NOt really necessary for miniProjecr3
router.put("/addAmount/:id", (req, res) => {
  accountController.addAmount(req, res);
});
//NOt really necessary for miniProjecr3
router.put("/sendAmount/:id", (req, res) => {
  accountController.sendAmount(req, res);
});
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:id", (req, res) => {
  accountController.deleteAccount(req, res);
});

export default router;
