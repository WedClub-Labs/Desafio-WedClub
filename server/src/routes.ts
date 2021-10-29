import { Router } from 'express'
import { UserController } from './controllers/userController'

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
  .get('/user', userController.getAllUsers)
  .get('/user/:id', userController.getUserById)
  .put('/user/:id', userController.updateUser)
  .delete('/user/:id', userController.deleteUser)


// get user -> { userName, email }

// post user -> { userName, email }

// get users -> [{ userName, email }]

/**
 * newUser = {
 *  userName
 *  email
 *  newUserName
 *  newEmail
 * }
 */

// update user (newUser) -> { userName, email }

// delete user -> void
