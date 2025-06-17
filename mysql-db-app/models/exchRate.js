import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;
class ExchRate extends Model {}
// Sequelize will create this table if it doesn't exist on startup
ExchRate.init(
  {
    //PK
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //Attributes
    exchRateName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exchRateBalance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "exchRates", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

export default ExchRate;
