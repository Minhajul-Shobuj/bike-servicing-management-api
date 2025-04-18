"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServicerRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bikeService_validation_1 = require("./bikeService.validation");
const bikeService_controller_1 = require("./bikeService.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(bikeService_validation_1.BikeServiceValidation.create), bikeService_controller_1.BikeServiceController.createBikeService);
router.get("/", bikeService_controller_1.BikeServiceController.getAllBikeServices);
router.get("/status", bikeService_controller_1.BikeServiceController.getAllBikeServicesByStatus);
router.get("/:id", bikeService_controller_1.BikeServiceController.getBikeServicebyId);
router.put("/:id", bikeService_controller_1.BikeServiceController.updateBikeServiceData);
exports.BikeServicerRoute = router;
