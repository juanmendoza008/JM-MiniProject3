"use strict";
import {
  Account,
  User,
  Transaction,
  TransactionType,
} from "../models/index.js";

// finds all Transaction in DB, then sends array as response
const getTransactions = (res) => {
  Transaction.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB
const createTransaction = (data, res) => {
  Transaction.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
//Put update Transaction //Not necessary function
const updateTransaction = (req, res) => {
  Transaction.update(req.body, {
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

const getTransactionByUser = async (req, res) => {
  const userID = parseInt(req.params.userID);

  try {
    const transactions = await Transaction.findAll({
      where: { userID },
      attributes: ["place", "category", "balance"],
      include: [
        {
          model: User,
          attributes: ["firstName", "lastName"],
        },
      ],
    });

    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getTransactionByAccount = async (req, res) => {
  const accountID = parseInt(req.params.accountID);

  try {
    const transactions = await Transaction.findAll({
      where: { accountID },
      attributes: ["place", "category", "balance"],
      include: [
        {
          model: Account,
          attributes: ["accountName", "symbol"],
        },
      ],
    });

    res.json(transactions);
    // return res.json({ temp: "thingo" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getTransactionByTransactionType = async (req, res) => {
  const transactionTypeID = parseInt(req.params.transactionTypeID);

  try {
    const transactions = await Transaction.findAll({
      where: { transactionTypeID },
      attributes: ["place", "category", "balance"],
      include: [
        {
          model: TransactionType,
          attributes: ["description"],
        },
      ],
    });

    res.json(transactions);
    // return res.json({ temp: "thingo" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export default {
  getTransactions,
  createTransaction,
  updateTransaction,
  getTransactionByUser,
  getTransactionByAccount,
  getTransactionByTransactionType,
};
