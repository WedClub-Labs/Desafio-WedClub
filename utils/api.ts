import axios from "./axios";
import { UserDoc, UserDocWithID } from "../types/User";
import { async } from "@firebase/util";

export const getUsers = async (): Promise<UserDocWithID[]> => {
  const response = await axios.get("/user");

  return response.data;
};

export const getUser = async (id: string): Promise<UserDocWithID> => {
  const response = await axios.get(`/user/${id}`);

  return response.data;
};

export const createUser = async (user: UserDoc): Promise<UserDocWithID> => {
  const response = await axios.put("/user", user);

  return response.data;
};

export const deleteUser = async (id: string): Promise<boolean> => {
  const response = await axios.delete(`/user/${id}`);

  return response.status === 200 && response.data;
};
