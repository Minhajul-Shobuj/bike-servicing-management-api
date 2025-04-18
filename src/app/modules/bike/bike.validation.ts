import { z } from "zod";

const create = z.object({
  body: z.object({
    brand: z.string(),
    model: z.string(),
    year: z.coerce.date(),
    customerId: z.string(),
  }),
});

export const BikeValidation = {
  create,
};
