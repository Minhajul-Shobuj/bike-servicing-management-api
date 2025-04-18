import { RequestHandler } from "express";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import status from "http-status";
import { BikeService } from "./bike.service";

const createBike: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeService.createBikeInDb(req.body);
  sendResponse(res, {
    data: result,
    message: "Bike added successfully",
    statusCode: status.CREATED,
    success: true,
  });
});

const getAllBikes: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeService.getAllBikesFromDb();
  sendResponse(res, {
    data: result,
    message: "Bike fetched successfully",
    statusCode: status.OK,
    success: true,
  });
});
const getBikebyId: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeService.getBikeByIdFromDb(id);
  sendResponse(res, {
    data: result,
    message: "Bikes fetched successfully",
    statusCode: status.OK,
    success: true,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getBikebyId,
};
