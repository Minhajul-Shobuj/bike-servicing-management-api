"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServiceValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string(),
        serviceDate: zod_1.z.coerce.date(),
        completionDate: zod_1.z.coerce.date().optional(),
        description: zod_1.z.string(),
    }),
});
exports.BikeServiceValidation = {
    create,
};
