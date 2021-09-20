import { NextApiRequest, NextApiResponse } from "next";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase";
import { UserDoc } from "../../../types/User";
import validateUser from "../../../utils/validateUser";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return GET(req, res);

    case "PUT":
      return PUT(req, res);

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const [user, invalid] = validateUser(req.body);
  if (invalid) {
    res.status(400).end("Invalid User");
    return;
  }

  const docRef = await addDoc(collection(db, "users"), user);

  res.status(200).json({
    ...user,
    id: docRef.id,
  });
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const querySnapshot = await getDocs(collection(db, "users"));

  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  res.status(200).json(users);
}
