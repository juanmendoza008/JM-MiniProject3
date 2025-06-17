// const express = require("express");
import express from "express";
import { userController } from "../controllers/index.js";
const router = express.Router();

// matches GET requests sent to /api/users
router.get("/", (req, res) => {
  userController.getUsers(res);
});
// matches POST requests sent to /api/users
router.post("/", (req, res) => {
  userController.createUser(req.body, res);
});
// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  userController.updateUser(req, res);
});
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:id", (req, res) => {
  userController.deleteUser(req, res);
});

export default router;
