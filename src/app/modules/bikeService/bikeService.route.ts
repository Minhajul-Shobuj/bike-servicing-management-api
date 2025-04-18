import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BikeServiceValidation } from "./bikeService.validation";
import { BikeServiceController } from "./bikeService.controller";
const router = express.Router();

router.post(
  "/",
  validateRequest(BikeServiceValidation.create),
  BikeServiceController.createBikeService
);
router.get("/", BikeServiceController.getAllBikeServices);

router.get("/status", BikeServiceController.getAllBikeServicesByStatus);
router.get("/:id", BikeServiceController.getBikeServicebyId);
router.put("/:id", BikeServiceController.updateBikeServiceData);

export const BikeServicerRoute = router;
