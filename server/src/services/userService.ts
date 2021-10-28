import { prismaClient } from '../prisma'
import { User, UserInfo } from '../utils/interfaces'

export class UserService {
  async create (
    userName: string,
    email: string
  ): Promise<User> {
    const newUser = await prismaClient.user.create({
      data: {
        userName,
        email
      }
    })

    return newUser
  }

  async getUser (email: string): Promise<User> {
    const user = await prismaClient.user.findUnique({
      where: {
        email
      }
    })

    return user
  }

  async getAllUsers (): Promise<User[]> {
    const allUsers = await prismaClient.user.findMany({
      select: {
        email: true,
        userName: true
      }
    })

    return allUsers
  }

  async updateUser (userInfo: UserInfo): Promise<User> {
    const {
      prevEmail,
      prevUserName,
      newUserName = prevUserName,
      newEmail = prevEmail
    } = userInfo

    const updatedUser = await prismaClient.user.update({
      where: {
        email: prevEmail
      },
      data: {
        userName: newUserName,
        email: newEmail
      }
    })

    return updatedUser
  }

  async deleteUser (email: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        email
      }
    })
  }
}
