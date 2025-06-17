"use strict";
import { TransactionType } from "../models/index.js";

// finds all users in DB, then sends array as response //Get
const getTransactionTypes = (res) => {
  TransactionType.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB //Post
const createTransactionType = (data, res) => {
  TransactionType.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//Put update user
const updateTransactionType = (req, res) => {
  TransactionType.update(req.body, {
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
// Delete user matching ID from params
const deleteTransactionType = (req, res) => {
  TransactionType.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
export default {
  getTransactionTypes,
  createTransactionType,
  updateTransactionType,
  deleteTransactionType,
};
