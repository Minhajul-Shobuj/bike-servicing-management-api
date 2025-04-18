import express, { Application } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import { CustomerRoute } from "./app/modules/customer/customer.route";
import { BikeRoute } from "./app/modules/bike/bike.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { BikeServicerRoute } from "./app/modules/bikeService/bikeService.route";

const app: Application = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customers", CustomerRoute);
app.use("/api/bikes", BikeRoute);
app.use("/api/services", BikeServicerRoute);

app.get("/", (req, res) => {
  res.send("Bike Servicing Management System API 🚲");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
