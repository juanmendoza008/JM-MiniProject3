import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;
class Transaction extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Transaction.init(
  {
    //PK
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //Attributes
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //FK
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchaseID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    transactionTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "transactions", // uselowercase plural format
    timestamps: true,
    updatedAt: false,
    freezeTableName: true,
  }
);

export default Transaction;
