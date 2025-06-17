"use strict";
import { Account, User } from "../models/index.js";

// finds all Accounts in DB, then sends array as response //Get
const getAccounts = (res) => {
  Account.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB //Post
const createAccount = (data, res) => {
  Account.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
//Put update Account //Not necessary function
const updateAccount = (req, res) => {
  Account.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// Deletes user matching ID from params
const deleteAccount = (req, res) => {
  Account.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Add Amount in the account
const addAmount = (req, res) => {
  Account.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// [Send - Payment] Amount in the Account
const sendAmount = (req, res) => {
  Account.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// Get Account by User_ID
const getAccountsByUser = async (req, res) => {
  const userID = parseInt(req.params.userID);

  try {
    const accounts = await Account.findAll({
      where: { userID },
      attributes: ["accountName", "currentBalance", "symbol"],
      include: [
        {
          model: User,
          attributes: ["firstName", "lastName"],
        },
      ],
    });

    res.json(accounts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export default {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  addAmount,
  sendAmount,
  getAccountsByUser,
};
