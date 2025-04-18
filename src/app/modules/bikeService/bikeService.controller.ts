import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { BikeServiceRecord } from "./bikeService.service";

const createBikeService: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeServiceRecord.createBikeServiceInDb(req.body);
  sendResponse(res, {
    data: result,
    message: "Service record created successfully",
    statusCode: status.CREATED,
    success: true,
  });
});

const getAllBikeServices: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeServiceRecord.getAllBikeServicesFromDb();

  sendResponse(res, {
    data: result,
    message: "Service records fetched successfully",
    statusCode: status.OK,
    success: true,
  });
});
const getBikeServicebyId: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServiceRecord.getBikeServiceByIdFromDb(id);
  sendResponse(res, {
    data: result,
    message: "Service record fetched successfully",
    statusCode: status.OK,
    success: true,
  });
});

const updateBikeServiceData: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  let completionDate;
  if (req.body && Object.keys(req.body).length > 0) {
    completionDate = req.body;
  } else {
    completionDate = { completionDate: new Date() };
  }
  const result = await BikeServiceRecord.updateBikeServiceDataInDb(
    id,
    completionDate
  );
  sendResponse(res, {
    data: result,
    message: "Service marked as completed",
    statusCode: status.OK,
    success: true,
  });
});

const getAllBikeServicesByStatus: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await BikeServiceRecord.getBikeServicebyStatus();
    sendResponse(res, {
      data: result,
      message: "Overdue or pending services fetched successfully",
      statusCode: status.OK,
      success: true,
    });
  }
);

export const BikeServiceController = {
  createBikeService,
  getAllBikeServices,
  getBikeServicebyId,
  updateBikeServiceData,
  getAllBikeServicesByStatus,
};
