import { prismaClient, PrismaClientKnownRequestError } from "../prisma";
import { userConflict, userNotFound } from "../utils";

export const createUser = async (firstName: string, lastName: string) => {
  try {
    const newUser = await prismaClient.user.create({
      data: {
        firstName,
        lastName,
      },
      select: {
        firstName: true,
        lastName: true,
      },
    });

    return newUser;
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        throw userConflict;
        // {
        //   statusConde: 409,
        //   message: "User already exists!",
        // };
      }

      throw { err };
    }

    throw { err };
  }
};

export const searchUniqueUser = async (firstName: string, lastName: string) => {
  try {
    const newUser = await prismaClient.user.findUnique({
      where: {
        fullName: {
          firstName,
          lastName,
        },
      },
      select: {
        firstName: true,
        lastName: true,
      },
    });

    return newUser;
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      throw { message: err.message };
    }
  }
};

export const searchUsers = async () =>
  prismaClient.user.findMany({
    select: {
      firstName: true,
      lastName: true,
    },
  });

export const updateUser = async (
  firstName: string,
  lastName: string,
  newFirstName: string = firstName,
  newLastName: string = lastName
) => {
  try {
    const user = await prismaClient.user.update({
      where: {
        fullName: {
          firstName,
          lastName,
        },
      },
      data: {
        firstName: newFirstName,
        lastName: newLastName,
      },
      select: {
        firstName: true,
        lastName: true,
      },
    });

    return user;
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        throw userConflict;
      }

      if (err.code === "P2025") {
        throw userNotFound;
      }

      throw { err };
    }

    throw { err };
  }
};

export const removeUser = async (firstName: string, lastName: string) => {
  try {
    await prismaClient.user.delete({
      where: {
        fullName: {
          firstName,
          lastName,
        },
      },
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw userNotFound;
      }

      throw { err };
    }
  }
};
