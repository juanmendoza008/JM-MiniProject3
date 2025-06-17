import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;
class Purchase extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Purchase.init(
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
    exchRateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "purchases", // uselowercase plural format
    timestamps: true,
    updatedAt: false,
    freezeTableName: true,
  }
);

export default Purchase;
