"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const customer_route_1 = require("./app/modules/customer/customer.route");
const bike_route_1 = require("./app/modules/bike/bike.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const bikeService_route_1 = require("./app/modules/bikeService/bikeService.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/customers", customer_route_1.CustomerRoute);
app.use("/api/bikes", bike_route_1.BikeRoute);
app.use("/api/services", bikeService_route_1.BikeServicerRoute);
app.get("/", (req, res) => {
    res.send("Bike Servicing Management System API 🚲");
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
