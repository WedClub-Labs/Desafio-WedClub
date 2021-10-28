import axios, { AxiosError } from 'axios'
import { UserResponse } from '../utils'

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

type ConflictError = {
  response: {
    data: {
      message: string
    }
  }
}

export const createUser = async (userName: string, email: string) => {
  try {
    const response = await api.post<UserResponse>('/user', {
      userName,
      email,
    })

    return response.data // { userName, email, id }
  } catch (err: AxiosError<ConflictError>) {
    return err.response.data.message
  }
}

export const getAllUsers = async () => {
  try {
    const response = await api.get<UserResponse>('/user')

    return response.data // [{ userName, email, id }]
  } catch (err: AxiosError<ConflictError>) {
    return err.response.data.message
  }
}

export const getUser = async (email: string) => {
  try {
    const response = await api.get('/user', {
      data: { email },
    })

    return response.data
  } catch (err: AxiosError) {
    return err.response.data.message
  }
}
