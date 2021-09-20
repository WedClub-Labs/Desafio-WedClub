import { NextApiRequest, NextApiResponse } from "next";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { UserDoc } from "../../../types/User";
import { getDocs } from "firebase/firestore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      get(req, res);
      break;

    case "PUT":
      put(req, res);
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function put(req: NextApiRequest, res: NextApiResponse) {
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

async function get(req: NextApiRequest, res: NextApiResponse) {
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

function validateUser(user: UserDoc): [UserDoc, boolean] {
  const invalid =
    user.first === undefined ||
    user.last === undefined ||
    user.birthday === undefined ||
    user.email === undefined ||
    user.phone === undefined;

  user = invalid
    ? null
    : {
        first: user.first,
        last: user.last,
        birthday: user.birthday,
        email: user.email,
        phone: user.phone,
      };

  return [user, invalid];
}
