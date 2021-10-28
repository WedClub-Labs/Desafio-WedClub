import { NextFunction, Request, Response } from 'express'
import { CreateUserService } from '../../services/user/createUserService'
import { IController } from '../protocols/controllerInterface'

export class CreateUserController implements IController {
  async execute (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { userName, password, email } = req.body
    try {
      const createUserService = new CreateUserService()
      const newUser = await createUserService.execute(userName, email, password)

      return res.status(201).json(newUser)
    } catch (err) {
      next(err)
    }
  }
}
