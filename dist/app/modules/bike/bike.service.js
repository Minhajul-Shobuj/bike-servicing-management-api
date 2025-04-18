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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createBikeInDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.customer.findUniqueOrThrow({
        where: {
            customerId: payload.customerId,
        },
    });
    const result = yield prisma.bike.create({
        data: payload,
    });
    return result;
});
const getAllBikesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findMany();
    return result;
});
const getBikeByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: id,
        },
    });
    return result;
});
exports.BikeService = {
    createBikeInDb,
    getAllBikesFromDb,
    getBikeByIdFromDb,
};
