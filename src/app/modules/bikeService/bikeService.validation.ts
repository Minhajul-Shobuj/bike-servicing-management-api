import { z } from "zod";

const create = z.object({
  body: z.object({
    bikeId: z.string(),
    serviceDate: z.coerce.date(),
    completionDate: z.coerce.date().optional(),
    description: z.string(),
  }),
});

export const BikeServiceValidation = {
  create,
};
