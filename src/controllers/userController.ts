import { NextFunction, Request, Response } from 'express'
import {
  createUser,
  removeUser,
  searchUniqueUser,
  searchUsers,
  updateUser
} from '../services/userService'

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const { firstName, lastName } = req.body
  try {
    const newUser = await createUser(firstName, lastName)

    return res.json(newUser)
  } catch (err) {
    next(err)
  }
}

export const getUniqueUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName = null, lastName = null }: any = req.query
  if (!firstName && !lastName) {
    return next()
  }

  if (!firstName || !lastName) {
    return next({
      statusCode: 400,
      message: 'This field is required!'
    })
  }
  try {
    const user = await searchUniqueUser(firstName, lastName)

    if (!user) {
      throw { message: 'User not found!', statusCode: 404 }
    }

    return res.json(user)
  } catch (err) {
    next(err)
  }
}

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await searchUsers()

  if (!users.length) {
    return res.status(204).send()
  }

  return res.json(users)
}

export const updateUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName }: any = req.query
  const { newFirstName = firstName, newLastName = lastName } = req.body

  try {
    const updatedUser = await updateUser(
      firstName,
      lastName,
      newFirstName,
      newLastName
    )

    return res.json(updatedUser)
  } catch (err) {
    return next(err)
  }
}

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName }: any = req.query

  try {
    await removeUser(firstName, lastName)
  } catch (err) {
    return next(err)
  }

  return res.status(204).send()
}
