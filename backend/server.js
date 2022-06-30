import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoute from "./routes/product.js";
import userRoute from "./routes/user.js";
import orderRoute from "./routes/order.js";
import { notFound, errorHandler } from "./middleware/error.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
