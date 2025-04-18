import status from "http-status";
import { PrismaClient, Service } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createBikeServiceInDb = async (payload: Service): Promise<Service> => {
  await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: payload.bikeId,
    },
  });
  const result = await prisma.service.create({
    data: payload,
  });
  return result;
};

const getAllBikeServicesFromDb = async (): Promise<Service[]> => {
  const result = await prisma.service.findMany();
  return result;
};
const getBikeServiceByIdFromDb = async (id: string) => {
  const result = await prisma.service.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const updateBikeServiceDataInDb = async (
  id: string,
  data: Partial<Service>
) => {
  await prisma.service.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  const result = await prisma.service.update({
    where: {
      serviceId: id,
    },
    data,
  });

  return result;
};

const getBikeServicebyStatus = async () => {
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
};

export const BikeServiceRecord = {
  createBikeServiceInDb,
  getAllBikeServicesFromDb,
  getBikeServiceByIdFromDb,
  updateBikeServiceDataInDb,
  getBikeServicebyStatus,
};
