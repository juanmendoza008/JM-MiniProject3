import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;
class Account extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Account.init(
  {
    //PK
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //Attributes
    accountNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accountName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentBalance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //FK
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "accounts", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

export default Account;
