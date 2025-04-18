import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    message: string;
    statusCode: number;
    success: boolean;
    data: T | undefined | null;
  }
) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    message: jsonData.message,
    data: jsonData.data || undefined || null,
  });
};

export default sendResponse;
