import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
// Routes
import KpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import seedDB from "./seedDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/kpi", KpiRoutes);
app.use("/product", productRoutes);

// MongoDB Database Configuration
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running... Port: ${PORT}`));

    seedDB();
  })
  .catch((error) => console.log(`Error Connecting Database: ${error}`));
