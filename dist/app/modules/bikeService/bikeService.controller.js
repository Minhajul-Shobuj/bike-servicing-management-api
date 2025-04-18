"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServiceController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const bikeService_service_1 = require("./bikeService.service");
const createBikeService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.BikeServiceRecord.createBikeServiceInDb(req.body);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Service record created successfully",
        statusCode: http_status_1.default.CREATED,
        success: true,
    });
}));
const getAllBikeServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.BikeServiceRecord.getAllBikeServicesFromDb();
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Service records fetched successfully",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
const getBikeServicebyId = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bikeService_service_1.BikeServiceRecord.getBikeServiceByIdFromDb(id);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Service record fetched successfully",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
const updateBikeServiceData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let completionDate;
    if (req.body && Object.keys(req.body).length > 0) {
        completionDate = req.body;
    }
    else {
        completionDate = { completionDate: new Date() };
    }
    const result = yield bikeService_service_1.BikeServiceRecord.updateBikeServiceDataInDb(id, completionDate);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Service marked as completed",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
const getAllBikeServicesByStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.BikeServiceRecord.getBikeServicebyStatus();
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Overdue or pending services fetched successfully",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
exports.BikeServiceController = {
    createBikeService,
    getAllBikeServices,
    getBikeServicebyId,
    updateBikeServiceData,
    getAllBikeServicesByStatus,
};
