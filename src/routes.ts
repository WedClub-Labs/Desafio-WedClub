import { Router } from 'express'
import { CreateUserController } from './controllers/user/createUserController'

export const router = Router()

/**
 * POST   -> create a new user
 * GET    -> get a user or all of them
 * PUT    -> update a user
 * DELETE -> delete a user
 */

const createUserController = new CreateUserController()

router
  .post('/user', createUserController.execute)
  // .get('/user', getUniqueUser, getAllUsers)
  // .put('/user', updateUserInfo)
  // .delete('/user', deleteUser)
