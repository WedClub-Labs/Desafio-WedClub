import axios from "./axios";
import { UserDocWithID } from "../types/User";

export const getUsers = async (): Promise<UserDocWithID[]> => {
  const res = await axios.get("/user");

  return res.data;
};
