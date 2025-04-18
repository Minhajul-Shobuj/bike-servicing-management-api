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
exports.BikeServiceRecord = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createBikeServiceInDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: payload.bikeId,
        },
    });
    const result = yield prisma.service.create({
        data: payload,
    });
    return result;
});
const getAllBikeServicesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findMany();
    return result;
});
const getBikeServiceByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const updateBikeServiceDataInDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.service.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    const result = yield prisma.service.update({
        where: {
            serviceId: id,
        },
        data,
    });
    return result;
});
const getBikeServicebyStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysOlder = new Date();
    sevenDaysOlder.setDate(sevenDaysOlder.getDate() - 7);
    const result = prisma.service.findMany({
        where: {
            AND: [
                { status: { in: ["pending", "inProgress"] } },
                {
                    serviceDate: { lt: sevenDaysOlder },
                },
            ],
        },
    });
    return result;
});
exports.BikeServiceRecord = {
    createBikeServiceInDb,
    getAllBikeServicesFromDb,
    getBikeServiceByIdFromDb,
    updateBikeServiceDataInDb,
    getBikeServicebyStatus,
};
