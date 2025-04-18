import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidation } from "./customer.validation";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(CustomerValidation.create),
  CustomerController.createCustomer
);
router.get("/", CustomerController.getAllCustomers);
router.get("/:id", CustomerController.getCustomerbyId);
router.put(
  "/:id",
  validateRequest(CustomerValidation.update),
  CustomerController.updateCustomerData
);

router.delete("/:id", CustomerController.deleteCustomerbyId);
export const CustomerRoute = router;
