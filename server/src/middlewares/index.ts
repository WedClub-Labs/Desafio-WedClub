import { NextFunction, Request, Response } from 'express'
import { PrismaClientKnownRequestError } from '../prisma'
import {
  dataNotFound,
  insertDataConflict,
  serverError,
} from '../utils/objError'

export const midErr = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  console.error(err.message)

  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return res
        .status(insertDataConflict.statusCode)
        .json({ message: insertDataConflict.message })
    }

    if (err.code === 'P2025') {
      return res
        .status(dataNotFound.statusCode)
        .json({ message: dataNotFound.message })
    }
  }

  return res
    .status(serverError.statusCode)
    .json({ message: serverError.message })
}
