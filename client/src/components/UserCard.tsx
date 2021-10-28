import { Link } from "react-router-dom";

type UserCardProps = {
  id: string,
  userName: string,
  email: string
}

export default function UserCard({ id, userName, email }: UserCardProps) {
  return (
    <Link to={`/user/${id}`}>
      <div>Nome: {userName}</div>
      <div>Email: {email}</div>
    </Link>
  )
}
