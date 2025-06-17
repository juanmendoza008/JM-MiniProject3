import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;
class TransactionType extends Model {}
// Sequelize will create this table if it doesn't exist on startup
TransactionType.init(
  {
    //PK
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //Attributes
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "transactionTypes", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

export default TransactionType;
