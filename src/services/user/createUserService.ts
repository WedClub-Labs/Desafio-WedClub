import { prismaClient } from '../../prisma'
import { ICreateUser, User } from '../protocols/createUserInterface'
import bcrypt from 'bcrypt'

export class CreateUserService implements ICreateUser {
  async execute (
    userName: string,
    email: string,
    password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await prismaClient.user.create({
      data: {
        userName,
        email,
        password: hashedPassword
      },
      select: {
        userName: true,
        email: true
      }
    })

    return newUser
  }
}
