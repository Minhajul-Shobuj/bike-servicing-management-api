import { Customer, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createCustomerInDb = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

const getAllCustomersFromDb = async () => {
  const result = await prisma.customer.findMany();
  return result;
};
const getCustomerByIdFromDb = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};

const updateCustomerDataInDb = async (id: string, data: Partial<Customer>) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data,
  });
  return result;
};

const deleteCustomerFromDb = async (id: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const result = await prisma.customer.delete({ where: { customerId: id } });
  return result;
};

export const CustomerService = {
  createCustomerInDb,
  getAllCustomersFromDb,
  getCustomerByIdFromDb,
  updateCustomerDataInDb,
  deleteCustomerFromDb,
};
