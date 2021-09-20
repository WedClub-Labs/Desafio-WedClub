import { deleteDoc, doc, getDoc, setDoc } from "@firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";
import validateUser from "../../../utils/validateUser";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return GET(req, res);

    case "POST":
      return POST(req, res);

    case "DELETE":
      return DELETE(req, res);

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const userID = req.query.userID as string;
  if (!userID) {
    return res.status(400).end("Missing User ID");
  }

  const docRef = doc(db, "users", userID);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return res.status(404).end("User Not Found");
  }

  res.status(200).json({
    ...docSnap.data(),
    id: docSnap.id,
  });
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(`1`, 1);
  const userID = req.query.userID as string;
  if (!userID) {
    return res.status(400).end("Missing User ID");
  }

  const docRef = doc(db, "users", userID);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return res.status(404).end("User Not Found");
  }

  const [user, invalid] = validateUser(req.body);
  if (invalid) {
    res.status(400).end("Invalid User");
    return;
  }

  await setDoc(doc(db, "cities", userID), user);

  res.status(200).json({
    ...user,
    id: userID,
  });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const userID = req.query.userID as string;
  if (!userID) {
    return res.status(400).end("Missing User ID");
  }

  const docRef = doc(db, "users", userID);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return res.status(404).end("User Not Found");
  }

  await deleteDoc(docRef);

  res.status(200).end("User Deleted");
}
