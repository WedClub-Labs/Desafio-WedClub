import { PrismaClient, Prisma } from "@prisma/client";

export const prismaClient = new PrismaClient();

// export const prismaClient = (): PrismaClient<{
//   rejectOnNotFound: true;
// }> => {
//   const prisma = new PrismaClient({
//     rejectOnNotFound: true,
//   });

//   return prisma;
// };

export const { PrismaClientKnownRequestError } = Prisma;
