"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string(),
        model: zod_1.z.string(),
        year: zod_1.z.coerce.date(),
        customerId: zod_1.z.string(),
    }),
});
exports.BikeValidation = {
    create,
};
