import { Bike, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createBikeInDb = async (payload: Bike) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: payload.customerId,
    },
  });
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

const getAllBikesFromDb = async () => {
  const result = await prisma.bike.findMany();
  return result;
};
const getBikeByIdFromDb = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const BikeService = {
  createBikeInDb,
  getAllBikesFromDb,
  getBikeByIdFromDb,
};
