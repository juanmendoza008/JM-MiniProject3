"use strict";
import { Account, User, Purchase, ExchRate } from "../models/index.js";

// finds all Transaction in DB, then sends array as response
const getPurchases = (res) => {
  Purchase.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB
const createPurchase = (data, res) => {
  Purchase.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
//Put update Transaction //Not necessary function
const updatePurchase = (req, res) => {
  Purchase.update(req.body, {
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

const getPurchaseByUser = async (req, res) => {
  const userID = parseInt(req.params.userID);

  try {
    const purchases = await Purchase.findAll({
      where: { userID },
      attributes: ["place", "category", "balance"],
      include: [
        {
          model: User,
          attributes: ["firstName", "lastName"],
        },
      ],
    });

    res.json(purchases);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getPurchaseByAccount = async (req, res) => {
  const accountID = parseInt(req.params.accountID);

  try {
    const purchases = await Purchase.findAll({
      where: { accountID },
      attributes: ["place", "category", "balance"],
      include: [
        {
          model: Account,
          attributes: ["accountName", "symbol"],
        },
      ],
    });

    res.json(purchases);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getPurchaseByExchRate = async (req, res) => {
  const exchRateID = parseInt(req.params.exchRateID);

  try {
    const purchases = await Purchase.findAll({
      where: { exchRateID },
      attributes: ["place", "category", "balance"],
      include: [
        {
          model: ExchRate,
          attributes: ["exchRateName", "exchRateBalance"],
        },
      ],
    });

    res.json(purchases);
    // return res.json({ temp: "thingo" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export default {
  getPurchases,
  createPurchase,
  updatePurchase,
  getPurchaseByUser,
  getPurchaseByAccount,
  getPurchaseByExchRate,
};
