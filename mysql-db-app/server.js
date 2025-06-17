import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js"; // centralized Sequelize instance
import userRoutes from "./routes/userRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import exchRateRoutes from "./routes/exchRateRoutes.js";
import transactionTypeRoutes from "./routes/transactionTypeRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL Sequelize application." });
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/exchRates", exchRateRoutes);
app.use("/api/transactionTypes", transactionTypeRoutes);

// Start Server and Connect DB
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL database");

    await sequelize.sync(); // Sync all models in one go
    console.log("Models synchronized");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};
startServer();
