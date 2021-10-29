import axios from 'axios'
import { UserResponse } from '../utils/types'

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const createUser = async (userName: string, email: string) => {
  const response = await api.post<UserResponse>('/user', {
    userName,
    email,
  })

  return response.data // { userName, email, id }
}

export const getAllUsers = async () => {
  const response = await api.get<UserResponse[]>('/user')

  return response.data // [{ userName, email, id }]
}

export const getUserById = async (id: string) => {
  const response = await api.get<UserResponse>(`/user/${id}`, {
    data: { id },
  })

  return response.data
}

export const updateUser = async (
  id: string,
  userName: string,
  email: string
) => {
  const response = await api.put<UserResponse>(`/user/${id}`, {
    userName,
    email,
  })

  return response.data
}

export const deleteUser = async (id: string) =>
  api.delete<UserResponse>(`/user/${id}`)
