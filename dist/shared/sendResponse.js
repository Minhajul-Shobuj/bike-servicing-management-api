"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsonData) => {
    res.status(jsonData.statusCode).json({
        success: jsonData.success,
        message: jsonData.message,
        data: jsonData.data || undefined || null,
    });
};
exports.default = sendResponse;
