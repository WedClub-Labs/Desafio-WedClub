import axios, { AxiosResponse } from 'axios'
import { UserResponse } from '../utils/types'

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

const imageApi = axios.create({
  baseURL: 'https://randomfox.ca/floof/',
})

export const createUser = async (
  userName: string,
  email: string,
  image: string
) => {
  const response = await api.post<UserResponse>('/user', {
    userName,
    email,
    image,
  })

  return response.data
}

export const getAllUsers = async () => {
  const response = await api.get<UserResponse[]>('/user')

  return response.data
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

export const getUserImage = async () => {
  const response = await imageApi.get('/')

  return response.data.image
}
