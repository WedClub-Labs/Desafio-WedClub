import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const user = getUser();
    res.status(200).json(user);
    return;
  }
  if (req.method === "POST") {
    const user = updateUser();
    res.status(200).json(user);
    return;
  }
  if (req.method === "DELETE") {
    const user = deleteUser();
    res.status(200).json(user);
    return;
  }

  res.status(405).end();
}

function getUser() {
  return {};
}

function updateUser() {
  return {};
}

function deleteUser() {
  return {};
}
