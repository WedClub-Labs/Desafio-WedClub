export interface User {
  userName: string
  email: string
}

export interface ICreateUser {
  execute: (userName: string, email: string, password: string) => Promise<User>
}

// get user -> { userName, email }

// post user -> { userName, email }

// get users -> [{ userName, email }]

/**
 * newUser = {
 *  userName
 *  password
 *  email
 *  newUserName
 *  newPassword
 *  newEmail
 * }
 */

// update user (newUser) -> { userName, email }

// delete user -> void
