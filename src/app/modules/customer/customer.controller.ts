import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CustomerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";

const createCustomer: RequestHandler = catchAsync(async (req, res) => {
  const result = await CustomerService.createCustomerInDb(req.body);
  sendResponse(res, {
    data: result,
    message: "Customer created successfully",
    statusCode: status.CREATED,
    success: true,
  });
});

const getAllCustomers: RequestHandler = catchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomersFromDb();

  sendResponse(res, {
    data: result,
    message: "Customers fetched successfully",
    statusCode: status.OK,
    success: true,
  });
});
const getCustomerbyId: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.getCustomerByIdFromDb(id);
  sendResponse(res, {
    data: result,
    message: "Customer fetched successfully",
    statusCode: status.OK,
    success: true,
  });
});

const updateCustomerData: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomerDataInDb(id, req.body);
  sendResponse(res, {
    data: result,
    message: "Customer updated successfully",
    statusCode: status.OK,
    success: true,
  });
});

const deleteCustomerbyId: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.deleteCustomerFromDb(id);
  sendResponse(res, {
    data: result,
    message: "Customer deleted successfully",
    statusCode: status.OK,
    success: true,
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getCustomerbyId,
  updateCustomerData,
  deleteCustomerbyId,
};
