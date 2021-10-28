import { Router } from 'express'
import { UserController } from './src/controllers/userController'

export const router = Router()

/**
 * POST   -> create a new user
 * GET    -> get a user or all of them
 * PUT    -> update a user
 * DELETE -> delete a user
 */

const userController = new UserController()

router
  .post('/user', userController.createUser)
  .get('/user', userController.getUser, userController.getAllUsers)
  .put('/user', userController.updateUser)
  .delete('/user', userController.deleteUser)
