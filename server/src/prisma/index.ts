import { PrismaClient, Prisma } from "@prisma/client";

export const prismaClient = new PrismaClient();

export const { PrismaClientKnownRequestError } = Prisma;
