import { prismaClient } from '../prisma'
import { User } from '../utils/interfaces'

export class UserService {
  async create (
    userName: string,
    email: string,
    image: string
  ): Promise<User> {
    const newUser = await prismaClient.user.create({
      data: {
        userName,
        email,
        image
      }
    })

    return newUser
  }

  async getUserById (id: string): Promise<User> {
    const user = await prismaClient.user.findUnique({
      where: {
        id
      }
    })

    return user
  }

  async getAllUsers (): Promise<User[]> {
    const allUsers = await prismaClient.user.findMany()

    return allUsers
  }

  async updateUser (userInfo: User): Promise<User> {
    const {
      id,
      userName,
      email
    } = userInfo

    const updatedUser = await prismaClient.user.update({
      where: {
        id
      },
      data: {
        userName,
        email
      }
    })

    return updatedUser
  }

  async deleteUser (id: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        id
      }
    })
  }
}
