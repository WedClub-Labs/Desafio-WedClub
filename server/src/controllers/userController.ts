import { NextFunction, Request, Response } from 'express'
import { UserService } from '../services/userService'
import { dataNotFound, missingData } from '../utils/objError'

export class UserController {
  async createUser (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { userName, email } = req.body
    try {
      const userService = new UserService()
      const newUser = await userService.create(userName, email)

      return res.status(201).json(newUser)
    } catch (err) {
      next(err)
    }
  }

  async getUser (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { email = null } = req.body

    if (!email) {
      next()
      return
    }

    try {
      const userService = new UserService()
      const user = await userService.getUser(email)

      if (!user) {
        const { statusCode, message } = dataNotFound
        return res.status(statusCode).json({ message })
      }

      return res.json(user)
    } catch (err) {
      next(err)
    }
  }

  async getAllUsers (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const userService = new UserService()
      const allUsers = await userService.getAllUsers()

      return res.json(allUsers)
    } catch (err) {
      next(err)
    }
  }

  async updateUser (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const {
      prevUserName = null,
      prevEmail = null,
      newUserName = prevUserName,
      newEmail = prevEmail
    } = req.body

    if (!newUserName || !newEmail) {
      const { statusCode, message } = missingData
      return res.status(statusCode).json({ message })
    }

    try {
      const userService = new UserService()
      await userService.updateUser(req.body)

      return res.status(204).send('Success!')
    } catch (err) {
      next(err)
    }
  }

  async deleteUser (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const userService = new UserService()
      await userService.getAllUsers()

      return res.status(204).send('Sucess!')
    } catch (err) {
      next(err)
    }
  }
}
