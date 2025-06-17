// models/index.js
import sequelize from "../dbConnect.js";
import User from "./user.js";
import Account from "./account.js";
import Purchase from "./purchase.js";
import Transaction from "./transaction.js";
import ExchRate from "./exchRate.js";
import TransactionType from "./transactionType.js";

// Setup associations
User.hasMany(Account, { foreignKey: "userID" });
Account.belongsTo(User, { foreignKey: "userID" });

User.hasMany(Purchase, { foreignKey: "userID" });
Purchase.belongsTo(User, { foreignKey: "userID" });

User.hasMany(Transaction, { foreignKey: "userID" });
Transaction.belongsTo(User, { foreignKey: "userID" });

Account.hasMany(Purchase, { foreignKey: "accountID" });
Purchase.belongsTo(Account, { foreignKey: "accountID" });

Account.hasMany(Transaction, { foreignKey: "accountID" });
Transaction.belongsTo(Account, { foreignKey: "accountID" });

ExchRate.hasMany(Purchase, { foreignKey: "exchRateID" });
Purchase.belongsTo(ExchRate, { foreignKey: "exchRateID" });

TransactionType.hasMany(Transaction, { foreignKey: "transactionTypeID" });
Transaction.belongsTo(TransactionType, { foreignKey: "transactionTypeID" });

Purchase.hasMany(Transaction, { foreignKey: "purchaseID" });
Transaction.belongsTo(Purchase, { foreignKey: "purchaseID" });

// Do not call sync here
export {
  sequelize,
  User,
  Account,
  Purchase,
  Transaction,
  ExchRate,
  TransactionType,
};
