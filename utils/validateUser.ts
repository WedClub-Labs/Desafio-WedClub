import { UserDoc } from "../types/User";

export default function validateUser(user: any): [UserDoc, boolean] {
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
