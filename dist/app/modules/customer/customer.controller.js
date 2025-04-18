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
exports.CustomerController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const customer_service_1 = require("./customer.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.CustomerService.createCustomerInDb(req.body);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Customer created successfully",
        statusCode: http_status_1.default.CREATED,
        success: true,
    });
}));
const getAllCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.CustomerService.getAllCustomersFromDb();
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Customers fetched successfully",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
const getCustomerbyId = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.CustomerService.getCustomerByIdFromDb(id);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Customer fetched successfully",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
const updateCustomerData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.CustomerService.updateCustomerDataInDb(id, req.body);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Customer updated successfully",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
const deleteCustomerbyId = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.CustomerService.deleteCustomerFromDb(id);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Customer deleted successfully",
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
exports.CustomerController = {
    createCustomer,
    getAllCustomers,
    getCustomerbyId,
    updateCustomerData,
    deleteCustomerbyId,
};
