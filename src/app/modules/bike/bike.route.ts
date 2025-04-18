import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BikeValidation } from "./bike.validation";
import { BikeController } from "./bike.controller";
const router = express.Router();

router.post(
  "/",
  validateRequest(BikeValidation.create),
  BikeController.createBike
);
router.get("/", BikeController.getAllBikes);
router.get("/:id", BikeController.getBikebyId);
export const BikeRoute = router;
